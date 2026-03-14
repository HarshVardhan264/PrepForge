const pdfParse = require("pdf-parse")
const { generateInterviewReport, generateResumePdf } = require("../services/ai.service")
const interviewReportModel = require("../models/interviewReport.model")

function convertTechnicalQuestions(arr = []) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "question") {

      const question = arr[i + 1]
      const intention = arr[i + 3]
      const answer = arr[i + 5]

      if (question && intention && answer) {
        result.push({
          question,
          intention,
          answer
        })
      }
    }
  }

  return result
}


function convertBehavioralQuestions(arr = []) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "question") {

      const question = arr[i + 1]
      const intention = arr[i + 3]
      const answer = arr[i + 5]

      if (question && intention && answer) {
        result.push({
          question,
          intention,
          answer
        })
      }
    }
  }

  return result
}


function convertSkillGaps(arr = []) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "skill") {

      const skill = arr[i + 1]
      const severity = arr[i + 3]

      if (skill && severity) {
        result.push({
          skill,
          severity
        })
      }
    }
  }

  return result
}


function convertPreparationPlan(arr = []) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "day") {

      const day = arr[i + 1]
      const focus = arr[i + 3]
      const task = arr[i + 5]

      if (day && focus && task) {
        result.push({
          day: Number(day),
          focus,
          tasks: [task]
        })
      }
    }
  }

  return result
}



/**
 * @description Controller to generate interview report based on user self description, resume and job description.
 */
async function generateInterViewReportController(req, res) {

    const resumeContent = await pdfParse(req.file.buffer)
    const { selfDescription, jobDescription } = req.body
    const title = jobDescription.split("\n")[0]

    const interViewReportByAi = await generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })
    console.log("AI RESPONSE:", interViewReportByAi)

    const formattedReport = {
    matchScore: interViewReportByAi.matchScore,
    technicalQuestions: convertTechnicalQuestions(interViewReportByAi.technicalQuestions),
    behavioralQuestions: convertBehavioralQuestions(interViewReportByAi.behavioralQuestions),
    skillGaps: convertSkillGaps(interViewReportByAi.skillGaps),
    preparationPlan: convertPreparationPlan(interViewReportByAi.preparationPlan)
}
    const interviewReport = await interviewReportModel.create({

        user: req.user.id,
        title,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...formattedReport
    })


    res.status(201).json({
        message: "Interview report generated successfully.",
        interviewReport
    })

}

/**
 * @description Controller to get interview report by interviewId.
 */
async function getInterviewReportByIdController(req, res) {

    const { interviewId } = req.params

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id })

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    res.status(200).json({
        message: "Interview report fetched successfully.",
        interviewReport
    })
}


/** 
 * @description Controller to get all interview reports of logged in user.
 */
async function getAllInterviewReportsController(req, res) {
    const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

    res.status(200).json({
        message: "Interview reports fetched successfully.",
        interviewReports
    })
}


/**
 * @description Controller to generate resume PDF based on user self description, resume and job description.
 */
async function generateResumePdfController(req, res) {
    const { interviewReportId } = req.params

    const interviewReport = await interviewReportModel.findById(interviewReportId)

    if (!interviewReport) {
        return res.status(404).json({
            message: "Interview report not found."
        })
    }

    const { resume, jobDescription, selfDescription } = interviewReport

    const pdfBuffer = await generateResumePdf({ resume, jobDescription, selfDescription })

    res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=resume_${interviewReportId}.pdf`
    })

    res.send(pdfBuffer)
}

module.exports = { generateInterViewReportController, getInterviewReportByIdController, getAllInterviewReportsController, generateResumePdfController }

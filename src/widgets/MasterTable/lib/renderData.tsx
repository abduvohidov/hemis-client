import React from "react";
import {
  IBachelorResponse,
  IEdcationResponse,
  IFacultyReponse,
} from "../../../shared";
import { IArticleReponse } from "../../../shared/api/article/article.types";

export function renderMasterEducation(education) {
  if (education && education.length > 0) {
    return education.map((edu: IEdcationResponse, index) => (
      <React.Fragment key={index}>
        <td>{edu.academicLeave}</td>
        <td>{edu.course}</td>
        <td>{edu.currentSpecialization}</td>
        <td>{edu.educationForm}</td>
        <td>{edu.entryYear}</td>
        <td>{edu.externamReviewer}</td>
        <td>{edu.internalReviewer}</td>
        <td>{edu.internshipSupervisor}</td>
        <td>{edu.languageCertificate}</td>
        <td>{edu.paymentType}</td>
        <td>{edu.scientificAdvisor}</td>
        <td>{edu.scientificSupervisor}</td>
        <td>{edu.semester}</td>
        <td>{edu.thesisTopic}</td>
      </React.Fragment>
    ));
  } else {
    return (
      <React.Fragment>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </React.Fragment>
    );
  }
}

export function renderMasterBachelor(bachelor) {
  if (bachelor && bachelor.length > 0) {
    return bachelor.map((bach: IBachelorResponse, index) => (
      <React.Fragment key={index}>
        <td>{bach?.previousUniversity}</td>
        <td>{bach?.graduationYear}</td>
        <td>{bach?.diplomaNumber}</td>
        <td>{bach?.previousSpecialization}</td>
      </React.Fragment>
    ));
  } else {
    return (
      <React.Fragment>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </React.Fragment>
    );
  }
}
export function renderMasterArticle(article) {
  if (article && article.length > 0) {
    return article.map((art: IArticleReponse, index) => (
      <React.Fragment key={index}>
        <td>{art?.firstArticle}</td>
        <td>{art?.firstArticleDate}</td>
        <td>{art?.firstArticleJournal}</td>
        <td>{art?.secondArticle}</td>
        <td>{art?.secondArticleDate}</td>
        <td>{art?.secondArticleJournal}</td>
      </React.Fragment>
    ));
  } else {
    return (
      <React.Fragment>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </React.Fragment>
    );
  }
}
export function renderMasterFaculty(faculty) {
  if (faculty && faculty.length > 0) {
    return faculty.map((fac: IFacultyReponse, index) => (
      <React.Fragment key={index}>
        <td>{fac?.name}</td>
      </React.Fragment>
    ));
  } else {
    return (
      <React.Fragment>
        <td>-</td>
      </React.Fragment>
    );
  }
}

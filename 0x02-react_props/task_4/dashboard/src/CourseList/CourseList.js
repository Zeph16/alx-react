import React from 'react'
import CourseListRow from './CourseListRow.js'
import './CourseList.css'

function CourseList() {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='CourseList' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow textFirstCell='ES6' textSecondCell='60' />
        <CourseListRow textFirstCell='Webpack' textSecondCell='20' />
        <CourseListRow textFirstCell='React' textSecondCell='40' />
      </tbody>
    </table>
  )
}

export default CourseList

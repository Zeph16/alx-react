import React from 'react'
import PropTypes from 'prop-types'
import CourseListRow from './CourseListRow.js'
import './CourseList.css'
import CourseShape from './CourseShape'

function CourseList({ listCourses }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='CourseList' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
	      { listCourses.length === 0 && 
          (<CourseListRow textFirstCell="No course available yet" isHeader={false}/>)
        }
        { listCourses.length > 0 && 
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
            />
          ))
        }
      </tbody>
    </table>
  )
}

CourseList.defaultProps = {
  listCourses: [],
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
}



export default CourseList

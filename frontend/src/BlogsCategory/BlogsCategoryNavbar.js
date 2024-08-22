import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'

function BlogsCategoryNavbar() {
  return (
    <div className="main_div__blogsCategory_navbar">
    <Navbar />
    <div className="container">
      <p className="heading__blogsCategory">Category</p>
      <div className="d-flex flex-row">
        <p className="para__blogsCategory_white">Blogs</p>
        <div className="orange_line__blogsCategory"></div>
        <p className="para__blogsCategory_orange">Category</p>
      </div>
    </div>
  </div>
  )
}

export default BlogsCategoryNavbar

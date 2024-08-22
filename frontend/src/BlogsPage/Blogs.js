import React, { useEffect, useState } from "react";
import "./../BlogsPage/BlogsStyle.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";
import Footer from "../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../Homepage/End_Footer/EndFooter";
import Loader from "./../Loader/Loader.js";
import BlogNavbar from "./BlogNavbar.js";
import slugify from "slugify";
function Blogs() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsCountPerPages, setitemsCountPerPages] = useState(0);
  const [lastpage, setlastpage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRelatedPostData, setFilteredRelatedPostData] = useState(null);

  const [blogsdata, setblogsdata] = useState("");
  useEffect(() => {
    getblogsdata();
  }, []);

  const getblogsdata = () => {
    axios
      .get(`/api/posts`)
      .then((res) => {
        setblogsdata(res.data);
        setFilteredRelatedPostData(res.data.data);
      
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter related post data based on the search query
    const filteredData = blogsdata.data.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRelatedPostData(filteredData);
  };

  const extractDateFromUpdatedAt = (updated_at) => {
    if (updated_at) {
      const datePart = updated_at.split("T")[0];
      return datePart;
    }
    // Handle the case where updated_at is undefined or null
    return null; // or any other appropriate default value
  };

  const [tagsdata, settagsdata] = useState("");
  useEffect(() => {
    gettagsdata();
  }, []);

  const gettagsdata = () => {
    axios
      .get(`/api/tags`)
      .then((res) => {
        settagsdata(res.data.tags);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  };

  const [Categorydata, setCategorydata] = useState("");
  useEffect(() => {
    getCategorydata();
  }, []);

  const getCategorydata = () => {
    axios
      .get(`/api/categories`)
      .then((res) => {
        setCategorydata(res.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  return (
    <>
      <>
        <BlogNavbar />
      </>
      <div className="main_div_blog_new">
          <div className="container">
            <div className="row">
              {blogsdata ? (
                blogsdata?.data?.map((data, index) => (
                  <>
                    {console.log(data?.image_url, "image")}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="blog_picture_div">
                        <img
                          // src={`${process.env.REACT_APP_BASE_URL}${data?.image_url}`}
                          src={data?.image_url}
                          className="blog_image_new"
                          alt="Blog Image"
                        />
                      </div>
                      <p className="para_heading_in_blog_new">
                        {data && data.title
                          ? data.title.split(" ").slice(0, 10).join(" ") +
                            (data.title.split(" ").length > 10 ? "..." : "")
                          : ""}
                      </p>

                      <p className="date_in_blog_new">
                        {" "}
                        {data?.created_at
                          ? extractDateFromUpdatedAt(data?.created_at)
                          : null}
                      </p>

                      <p
                        className="para_in_blog_new"
                        dangerouslySetInnerHTML={{
                          __html:
                            data && data.body
                              ? data.body.split(" ").slice(0, 10).join(" ") +
                                (data.body.split(" ").length > 10 ? "..." : "")
                              : "",
                        }}
                      ></p>

                      <Link
                        to={`/blogs/${data.id}/${slugify(data.title, {
                          lower: true,
                        })}`}
                      >
                        <p className="read_more_para">Read More</p>
                      </Link>
                    </div>
                  </>
                ))
              ) : (
                <div className="loader_div">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div> 
      <>
        {" "}
        {totalPages > 0 && (
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="pagination_blogs">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={itemsCountPerPages}
                  totalItemsCount={totalPages}
                  pageRangeDisplayed={lastpage}
                  onChange={handlePageChange}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            </div>
          </div>
        )}
      </>
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
      <Footer />
      <EndFooter />
    </>
  );
}

export default Blogs;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Footer from "../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../Homepage/End_Footer/EndFooter";
import "./../BlogsCategory/BlogsCategoryStyle.css";
import BlogsCategoryNavbar from "./BlogsCategoryNavbar";
import Loader from "../Loader/Loader";
import slugify from "slugify";

function BlogsCategory() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
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

  const { id } = useParams();
  const [relatedcategory, setRelatedCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getRelatedCategoryData();
  }, [id, currentPage]);

  const getRelatedCategoryData = () => {
    axios
      .get(`/api/categories/${id}/posts?page=${currentPage}`)
      .then((res) => {
        setRelatedCategory(res.data.data);
        setTotalPages(res.data.total);
        setItemsPerPage(res.data.per_page);
      })
      .catch((error) => {
        console.error("Error fetching category posts:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const extractDateFromUpdatedAt = (updatedAt) => {
    if (updatedAt) {
      const datePart = updatedAt.split("T")[0];
      return datePart;
    } else {
      return "N/A"; // or any other appropriate value or behavior
    }
  };

  return (
    <div>
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
      <BlogsCategoryNavbar />

      <div className="main_div_blog_new">
        <div className="container">
          <div className="row">
            {isLoading ? (
              <div className="loader_div">
                <Loader />
              </div>
            ) : relatedcategory.length > 0 ? (
              relatedcategory.map((data, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="blog_picture_div">
                    <Link
                      to={`/blogs/${data.id}/${slugify(data.title, {
                        lower: true,
                      })}`}
                    >
                      <img
                        src={data?.image_url}
                        className="blog_image_new"
                        alt="continuelogo"
                      />
                    </Link>
                  </div>
                  <Link
                    to={`/blogs/${data.id}/${slugify(data.title, {
                      lower: true,
                    })}`}
                  >
                    <p className="para_heading_in_blog_new">{data?.title}</p>
                  </Link>
                  <p className="date_in_blog_new">
                    {data?.created_at
                      ? extractDateFromUpdatedAt(data?.created_at)
                      : null}
                  </p>
                  <p
                    className="para_in_blog_new"
                    dangerouslySetInnerHTML={{
                      __html: data?.body
                        ? data.body.split(" ").slice(0, 20).join(" ") +
                          (data.body.split(" ").length > 20 ? "..." : "")
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
              ))
            ) : (
              <div className="d-flex justify-content-center">
                <p className="no_data_available">No data found.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {totalPages > 0 && (
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="pagination_blogs">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalPages}
                onChange={setCurrentPage}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <EndFooter />
    </div>
  );
}

export default BlogsCategory;

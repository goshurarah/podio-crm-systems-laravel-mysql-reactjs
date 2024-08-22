import React, { useEffect, useState } from "react";
import "./../BlogPostOpen/BlogsPostOpenStyle.css";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import dummypic from "./../Assets/greyellipse.png";
import Footer from "../Homepage/FooterPodiocrmsystems/Footer";
import EndFooter from "../Homepage/End_Footer/EndFooter";
import Loader from "../Loader/Loader";
import NotificationDisplay from "../NotficationDisplay/NotificationDisplay";
import BlogPostOpenNavbar from "./BlogPostOpenNavbar";
import slugify from "slugify";

function BlogPostOpen() {
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

  const [postUrl, setpostUrl] = useState("");
  useEffect(() => {
    setpostUrl(window.location.href);
  }, []);

  // Get the 'id' parameter from the route
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // Initialize the state to store the blog post data
  const [blogsdata, setblogsdata] = useState(null);

  // Fetch the blog post data when the component mounts
  useEffect(() => {
    getblogsdata();
  }, []);

  // Fetch blog post data from the API
  const getblogsdata = () => {
    axios
      .get(`/api/get-all-posts`)
      .then((res) => {
        setblogsdata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs post:", error);
      });
  };
  const [relatedpostdata, setrelatedpostdata] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRelatedPostData, setFilteredRelatedPostData] = useState(null);

  console.log(filteredRelatedPostData, "filteredRelatedPostData");
  // Fetch the blog post data when the component mounts
  useEffect(() => {
    getrelatedpostdata();
  }, []);

  // Fetch blog post data from the API
  const getrelatedpostdata = () => {
    axios
      .get(`/api/posts/${id}/related-posts`)
      .then((res) => {
        console.log(res, "related post data from api");
        setrelatedpostdata(res.data);
        setFilteredRelatedPostData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching related post:", error);
      });
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter related post data based on the search query
    const filteredData = relatedpostdata.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRelatedPostData(filteredData);
  };
  // Find the selected blog post based on the id parameter
  const selectedPost = blogsdata?.posts?.find((post) => post.id === Number(id));
  //   const selectedPost = blogsdata?.find(post => post.id === Number(id));
  const extractDateFromUpdatedAt = (updated_at) => {
    if (updated_at) {
      const datePart = updated_at.split("T")[0];
      return datePart;
    } else {
      // Handle the case when updated_at is undefined
      return "N/A"; // or any other appropriate value or behavior
    }
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
        console.error("Error fetching category post:", error);
      });
  };

  const [relatedcategory, setrelatedcategorydata] = useState(null);

  // Fetch the blog post data when the component mounts
  useEffect(() => {
    getrelatedcategorydata();
  }, []);

  // Fetch blog post data from the API
  const getrelatedcategorydata = () => {
    axios
      .get(`/api/categories/${id}/posts`)
      .then((res) => {
        setrelatedcategorydata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching category posts:", error);
      });
  };

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showcommentForm, setshowcommentForm] = useState(true);

  const [commnetidforblog, setcommnetidforblog] = useState("");

  const [commentshow, setcommentshow] = useState(null);

  // Fetch the blog post data when the component mounts
  useEffect(() => {
    getsetcommentshow();
  }, []);

  // Fetch blog post data from the API
  const getsetcommentshow = () => {
    axios
      .get(`/api/posts/${id}/comments`)
      .then((res) => {
        setcommentshow(res.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  };
  const handleReplyClick = (commnetid) => {
    localStorage.setItem("commnetid", commnetid);
    setcommnetidforblog(commnetid);
    setShowReplyForm(true);
    setshowcommentForm(false);
  };

  useEffect(() => {
    setcommnetidforblog(localStorage.getItem("commnetid"));
  }, []);
  const handleDateFormat = (date) => {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
  };

  const handleCancelClick = () => {
    setShowReplyForm(false);
    setshowcommentForm(true);
  };

  const handlePostComment = () => {
    // Implement your logic to handle posting the comment
    // You can access the comment, email, and password from the state
    // For example: const comment = commentState;
  };

  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationMessageRed, setnotificationMessageRed] = useState(null);

  const [writecomment, setwritecomment] = useState("");
  const [writereply, setwritereply] = useState("");
  // localStorage.getItem("comment");

  useEffect(() => {
    setwritecomment(localStorage.getItem("comment"));
    setwritereply(localStorage.getItem("reply"));
  }, []);

  localStorage.setItem("comment", writecomment);
  localStorage.setItem("reply", writereply);

  const createcommentonblog = (e) => {
    e.preventDefault();
    let payload = {
      body: writecomment,
    };
    axiosInstance
      .post(`/api/posts/${id}/comments`, payload)
      .then((r) => {
        setwritecomment("");
        // Remove the item from localStorage
        setNotificationMessage(r?.data?.message);
        localStorage.removeItem("blogid");
        localStorage.removeItem("comment");
        localStorage.removeItem("reply");

        getsetcommentshow();
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((e) => {
        localStorage.setItem("blogid", id);
        if (e.response.data.message === "Unauthenticated.") {
          setnotificationMessageRed("SignIn for comment");
          setTimeout(() => {
            navigate("/signin");
            setnotificationMessageRed("");
          }, 2000);
        }

        if (e.response.data.errors != undefined) {
          // alert(e.response.data.message);
          setnotificationMessageRed(e.response.data.message);
        }
      });
  };

  const createreplyonblog = (e) => {
    e.preventDefault();
    let payload = {
      body: writereply,
    };
    axiosInstance
      .post(`/api/posts/${id}/comments/${commnetidforblog}/reply`, payload)
      .then((r) => {
        setwritereply("");
        // Remove the item from localStorage
        setNotificationMessage(r?.data?.message);
        getsetcommentshow();
        localStorage.removeItem("blogid");
        localStorage.removeItem("comment");
        localStorage.removeItem("reply");
        setTimeout(() => {
          setNotificationMessage("");
        }, 4000);
      })
      .catch((e) => {
        localStorage.setItem("blogid", id);
        if (e.response.data.message === "Unauthenticated.") {
          setnotificationMessageRed("SignIn for reply");
          setTimeout(() => {
            navigate("/signin");
            setnotificationMessageRed("");
          }, 2000);
        }

        if (e.response.data.errors != undefined) {
          // alert(e.response.data.message);
          setnotificationMessageRed(e.response.data.message);
        }
      });
  };

  let firstParagraph, remainingContent;

  if (selectedPost && selectedPost.body) {
    const firstPeriodIndex = selectedPost.body.indexOf(".");

    if (firstPeriodIndex !== -1) {
      // Extract the first paragraph up to the first period (including the period)
      firstParagraph = selectedPost.body.substring(0, firstPeriodIndex + 1);
      // The remaining content starts after the first period
      remainingContent = selectedPost.body.substring(firstPeriodIndex + 1);
    } else {
      // If there is no period found, treat the whole content as the first paragraph
      firstParagraph = selectedPost.body;
      remainingContent = "";
    }
  } else {
    firstParagraph = "";
    remainingContent = "";
  }

  return (
    <>
      <>
        {notificationMessage && (
          <NotificationDisplay message={notificationMessage} />
        )}
      </>
      <>
        {notificationMessageRed && (
          <NotificationDisplay message={notificationMessageRed} />
        )}
      </>
      <>
        <BlogPostOpenNavbar />
      </>

      <div className="container blogs_content_main_div">
        <div className="row">
          <div className=" col-lg-8">
            <div className="main_div_blogopen_conatainer">
              <img
                src={selectedPost ? selectedPost?.image_url : <Loader />}
                className="blog_image_style"
              />

              <div className="main_div_background_color">
                <div className="d-flex justify-content-start">
                  <i class="fa-solid fa-user icon_colour_style_content"></i>
                  <p className="content_text">By Admin</p>
                  <i class="fa-solid fa-calendar-days icon_colour_style_content"></i>
                  <p>
                    {selectedPost?.created_at
                      ? extractDateFromUpdatedAt(selectedPost?.created_at)
                      : null}
                  </p>
                </div>

                <p className="heading_content_right">
                  {selectedPost ? selectedPost?.title : null}
                </p>
                <p className="para_centent_right">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: firstParagraph ? firstParagraph : null,
                    }}
                  />
                </p>
                <div className="quote_main_div">
                  <p className="para_quote">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedPost ? selectedPost?.quote : null,
                      }}
                    />
                  </p>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: remainingContent ? remainingContent : null,
                  }}
                />
              </div>

              <div className="row m-0 p-0">
                <div className="col-lg-6 col-md-6 col-12 m-0 p-0">
                  <div className="main_div_tags_social_media m-0 p-0">
                    <div className="col-lg-12 col-md-12 col-12 m-0 p-0">
                      <p className="Tag_heading_blog m-0 p-0 mt-4 mb-3">
                        Related Tags:{" "}
                      </p>
                      <div className="main_div_tag_name ">
                        {tagsdata
                          ? tagsdata?.map((data, index) => (
                              <>
                                <Link to={`/tags/${data.id}`}>
                                  <div className="button_tags_name">
                                    {data.name}
                                  </div>
                                </Link>
                              </>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 m-0 p-0">
                  <div className="d-flex justify-content-end m-0 p-0">
                    <p className="Tag_heading_blog m-0 p-0 mt-4 mb-3">
                      Social Share:
                    </p>
                  </div>
                  <div className="d-flex justify-content-end m-0 p-0">
                    <div className="d-flex justify-content-start m-0 p-0">
                      <div className="main_div_icon_blog_left">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            postUrl
                          )}`}
                          target="_blank"
                        >
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                      </div>

                      <div className="main_div_icon_blog_left">
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            postUrl
                          )}`}
                          target="_blank"
                        >
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                      </div>

                      <div className="main_div_icon_blog_left">
                        <a
                          href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                            postUrl
                          )}`}
                          target="_blank"
                        >
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="comment_para_blog">Comments</p>

              <div className="row mb-5">
                {commentshow
                  ? commentshow?.comments?.map((data, index) => (
                      <>
                        {data?.is_approved == "1" ? (
                          <>
                            <div className="col-lg-2 col-md-3 col-12">
                              <img
                                src={
                                  data?.user?.profile_pic
                                    ? `${process.env.REACT_APP_BASE_URL}/uploads/${data?.user?.profile_pic}`
                                    : dummypic
                                }
                                className="comment_picture_style"
                              />
                            </div>
                            <div className="col-lg-10 col-md-7 col-12">
                              <p className="comment_person_name">
                                {data.user.first_name}
                              </p>
                              <p className="comment_date">
                                {data?.created_at
                                  ? handleDateFormat(data?.created_at)
                                  : null}
                              </p>
                              <p className="comment_para">{data.body}</p>
                              <p
                                className="reply_heading"
                                onClick={() => handleReplyClick(data?.id)}
                              >
                                REPLY
                              </p>

                              {data?.replies?.map((data, index) => (
                                <>
                                  {data?.is_approved == "1" ? (
                                    <>
                                      <div className="row">
                                        <div className="col-lg-2 col-md-3 col-12">
                                          <img
                                            src={
                                              data?.user?.profile_pic
                                                ? `${process.env.REACT_APP_BASE_URL}/uploads/${data?.user?.profile_pic}`
                                                : dummypic
                                            }
                                            className="comment_picture_style"
                                          />
                                        </div>
                                        <div className="col-lg-10 col-md-7 col-12">
                                          <p className="comment_person_name">
                                            {data.user.first_name}
                                          </p>
                                          <p className="comment_date">
                                            {data?.created_at
                                              ? handleDateFormat(
                                                  data?.created_at
                                                )
                                              : null}
                                          </p>
                                          <p className="comment_para">
                                            {data.body}
                                          </p>
                                        </div>
                                      </div>
                                    </>
                                  ) : null}
                                </>
                              ))}

                              {/* write reply code here  */}
                            </div>
                          </>
                        ) : null}
                      </>
                    ))
                  : null}

                {showReplyForm && (
                  <div>
                    <form onSubmit={createreplyonblog}>
                      <button
                        className="cancel_button_reply"
                        onClick={handleCancelClick}
                      >
                        Cancel Reply
                      </button>
                      <p className="comment_para_blog">Write your reply</p>
                      <textarea
                        className="enter_comment_here_input"
                        placeholder="Enter Reply Here.."
                        required
                        onChange={(e) => {
                          setwritereply(e.target.value);
                        }}
                        value={writereply}
                      />
                      {/* <textarea
                      className="enter_email_here_input"
                      placeholder="Enter Email Here.."
                    />
                    <textarea
                      className="enter_email_here_input"
                      placeholder="Enter Password Here.."
                    /> */}
                      <button
                        type="submit"
                        className="post_comment_button"
                        onClick={handlePostComment}
                      >
                        Post Reply
                      </button>
                    </form>
                  </div>
                )}

                {showcommentForm && (
                  <div>
                    {selectedPost?.is_commentable === 1 ? (
                      <form onSubmit={createcommentonblog}>
                        <p className="comment_para_blog">Write your comment</p>
                        <textarea
                          className="enter_comment_here_input"
                          placeholder="Enter Comment Here.."
                          onChange={(e) => {
                            setwritecomment(e.target.value);
                          }}
                          value={writecomment}
                          required
                        />
                        {/* <textarea
                      className="enter_email_here_input"
                      placeholder="Enter Email Here.."
                    />
                    <textarea
                      className="enter_email_here_input"
                      placeholder="Enter Password Here.."
                    /> */}
                        <button
                          className="post_comment_button"
                          onClick={handlePostComment}
                          type="submit"
                        >
                          Post Comment
                        </button>
                      </form>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="blog_content_left_main_div">
              <div className="input_div_search_div">
                <div className="d-flex justify-content-between">
                  <input
                    className="input_style_serach"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="blue_button_search_blog"></button>
                </div>
              </div>
            </div>

            <div className="blog_content_left_main_div">
              <div className="d-flex justify-content-start">
                <div className="hr_tag_blue" />
                <p className="related_post_text">Related Posts</p>
              </div>

              <div className="related_post_main_div">
                {filteredRelatedPostData ? (
                  filteredRelatedPostData.length > 0 ? (
                    filteredRelatedPostData.map((data, index) => (
                      <div className="related_post_div" key={data.id}>
                        <Link
                          to={`/blogs/${data.id}/${slugify(data.title, {
                            lower: true,
                          })}`}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-2 col-4">
                              <img
                                className="image_related_post"
                                src={data?.image_url}
                                alt={data?.title}
                              />
                            </div>
                            <div className="col-lg-8 col-md-10 col-8">
                              <p className="desp_related_post">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></i>
                                {data?.created_at
                                  ? extractDateFromUpdatedAt(data?.created_at)
                                  : null}
                              </p>
                              <p className="heading_related_post">
                                {data?.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : null
                ) : (
                  <Loader />
                )}
              </div>
            </div>

            <div className="blog_content_left_main_div">
              <div className="d-flex justify-content-start">
                <div className="hr_tag_blue" />
                <p className="related_post_text">Categories</p>
              </div>
              <div className="category_div_below">
                <ul>
                  {Categorydata
                    ? Categorydata?.map((data, index) => (
                        <>
                          <Link to={`/category/${data.id}`}>
                            <li className="category_name">{data.name}</li>
                            <div className="dotted-line"></div>
                          </Link>
                        </>
                      ))
                    : null}
                </ul>
              </div>
            </div>

            <div className="blog_content_left_main_div margin_bottom_class_add">
              <div className="d-flex justify-content-start">
                <div className="hr_tag_blue" />
                <p className="related_post_text">Tags</p>
              </div>
              <div className="main_div_tag">
                {tagsdata
                  ? tagsdata?.map((data, index) => (
                      <>
                        <Link to={`/tags/${data.id}`}>
                          <div className="button_tags">{data.name}</div>
                        </Link>
                      </>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <></>
      <></>
      <div className="mt-5">
        <div className="mt-5">
          <div className="mt-5">
            {" "}
            <Footer />
          </div>
        </div>
      </div>
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
      <EndFooter />
    </>
  );
}

export default BlogPostOpen;

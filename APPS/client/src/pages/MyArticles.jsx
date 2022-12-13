import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header"; // header
import { Container, Modal } from "react-bootstrap"; // conteiner for ui
import Footer from "../components/Footer"; // footer
import { useAppContext } from "../context/UseAppContext"; // app contexxt for getting articles
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";

const MyArticles = ({ user }) => {
  const [myarticles, setMyArticles] = useState([]);

  const { articles, categories, addArticle, editArticle, removeArticle } =
    useAppContext(); // get articles from state

  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);

  const [currentid, setCurrentId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    readonly: false,
    height: 300,
  };
  const handleUpdate = (event) => {
    setDescription(event);
  };

  const openaddmodal = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setContent("");
    setAddShow(true);
  };

  // ! Create new Article
  const add = async () => {
    if (title === "" || category === "" || description === "") {
      toast.error("Please Fill Full Form");
    } else {
      await addArticle(title, category, description);
      setAddShow(false);

      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  const openeditmodal = (id, title, category, description) => {
    setCurrentId(id);
    setTitle(title);
    setCategory(category._id);
    setContent(description);
    setDescription(description);
    setEditShow(true);
  };

  // ! Edit an Article
  const edit = async () => {
    console.log(title, category, description);
    if (title === "" || category === "" || description === "") {
      toast.error("Please Fill Full Form");
    } else {
      await editArticle(currentid, title, category, description);
      setEditShow(false);

      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  // ! Delete an Article
  const deletearticle = async (id) => {
    await removeArticle(id);

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    //! get category articles
    var newArray = articles.filter(function (el) {
      console.log(el);
      return el.user._id === user._id;
    });

    console.log(newArray);

    setMyArticles(newArray);
  }, []);
  // rendering ui
  return (
    <>
      <Header user={user} />

      <Container>
        <br />
        <div className="d-flex justify-content-between align-items-center gap-10 flex-wrap-wrap">
          <h2 className="text-center">My Articles</h2>
          <button className="btn btn-myprimary" onClick={openaddmodal}>
            Add New Article
          </button>
        </div>
        <br />

        <div className="row">
          {/* rederinging article card for all articles */}

          {myarticles.map((article, i) => {
            return (
              <div className="col-md-12" key={i}>
                <div className="card">
                  <div className="card-content">
                    {/* article description */}
                    <h2>{article.title}</h2>
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{ __html: article.description }}
                    ></p>
                    <Link
                      to={`/article/${article._id}`}
                      className="text-decoration-none text-black"
                      style={{ fontWeight: "bold" }}
                    >
                      Read More...
                    </Link>
                    <br />
                    <br />
                    <button
                      className="btn btn-myprimary"
                      onClick={() =>
                        openeditmodal(
                          article._id,
                          article.title,
                          article.category,
                          article.description
                        )
                      }
                    >
                      Edit
                    </button>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-myprimary"
                      onClick={() => deletearticle(article._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <br />
      <Footer />
      <Modal
        size="md"
        show={addShow}
        onHide={() => setAddShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Add Article
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <div className="container">
            <label>Article Title</label>
            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Article Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((v, i) => {
                return (
                  <option value={v._id} key={i}>
                    {v.category}
                  </option>
                );
              })}
            </select>
            <br />
            <label>Article Description</label>
            <br />
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={handleUpdate}
              onChange={(newContent) => {}}
            />

            {/* <textarea className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%", height: 300 }}></textarea> */}
            <br />
            <br />
            <button onClick={add} className="btn btn-myprimary">
              Publish
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="md"
        show={editShow}
        onHide={() => setEditShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Edit Article
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <div className="container">
            <label>Article Title</label>
            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Article Category</label>
            <select
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((v, i) => {
                return (
                  <option value={v._id} key={i}>
                    {v.category}
                  </option>
                );
              })}
            </select>
            <br />
            <label>Article Description</label>
            <br />
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={handleUpdate}
              onChange={(newContent) => {}}
            />
            {/* <textarea className='form-control' value={description} onChange={(e) => setDescription(e.target.value)} style={{ width: "100%", height: 300 }}></textarea> */}
            <br />
            <br />
            <button onClick={edit} className="btn btn-myprimary">
              Publish
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyArticles;

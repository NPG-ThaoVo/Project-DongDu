import styles from "./list-blog.module.css";
import { useState } from "react";
import PopupDelete from "../popup-delete";
import clsx from "clsx";
import Link from "next/link";

export default function ListBlog() {
  const dbListBlog = [
    {
      author: "A",
      title: "Praeterea iter est quasdam res quas ex communin",
      date: "21/12/2021",
    },
    {
      author: "B",
      title: "Praeterea iter est quasdam res quas ex communin",
      date: "21/12/2021",
    },
    {
      author: "C",
      title: "Praeterea iter est quasdam res quas ex communin",
      date: "21/12/2021",
    },
    {
      author: "D",
      title: "Praeterea iter est quasdam res quas ex communin",
      date: "21/12/2021",
    },
    {
      author: "E",
      title: "Praeterea iter est quasdam res quas ex communin",
      date: "21/12/2021",
    },
  ];

  const [deleteConfirm, setDeleteConfirm] = useState(false);

  function cancelDelete() {
    setDeleteConfirm(false);
  }

  function openPopupConfirm() {
    setDeleteConfirm(true);
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>List Blog</div>
      {!deleteConfirm || <PopupDelete cancelDelete={cancelDelete} />}
      <div className={styles["titleLine"]}></div>
      <div className={"container table-responsive " + styles["pp"]}>
        <div className={"d-flex mb-5 " + styles["d-flex"]}>
          <div
            className={
              "input-group md-form form-sm form-1 pl-0 " + styles["md"]
            }
          >
            <div className="input-group-prepend">
              <span
                className="input-group-text purple lighten-3"
                id="basic-text1"
              >
                <img src="/icons/search-svgrepo-com.svg"></img>
              </span>
            </div>
            <input
              className="form-control my-0 py-1"
              type="text"
              aria-label="Search"
            />
          </div>
          <button
            type="button"
          className={"btn btn-primary ml-2 " + styles["mw"]}
          >
          Add New
        </button>
      </div>
      <table className={"table " + styles["bb"]}>
        <thead>
          <tr className={styles["border-none"]}>
            <th scope="col">Title</th>
            <th scope="col">Tác giả</th>
            <th scope="col">Ngày đăng</th>
            <th scope="col">Hiển thị</th>
          </tr>
        </thead>
        <tbody>
          {dbListBlog.map((item, i) => {
            return (
              <tr
                key={i}
                className={clsx(styles["border-none"], styles["row"])}
              >
                <td>
                  <div>
                    <Link href="/admin/edit-blog">
                      <a>
                        <p>{item.title}</p>
                      </a>
                    </Link>
                  </div>
                </td>
                <td>
                  <div>{item.author}</div>
                </td>
                <td>
                  <div>{item.date}</div>
                </td>
                <td>
                  <div>
                    <input className="custom-switch"
                      type="checkbox"
                      data-toggle="toggle"
                      data-size="sm"
                      data-offstyle="dark"
                    />
                  </div>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      className={"btn btn-danger ml-2 " + styles["btn"]}
                      onClick={openPopupConfirm}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div >
  );
}

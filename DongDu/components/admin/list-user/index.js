import styles from "./list-user.module.css";
import { useState } from "react";
import PopupDelete from "../popup-delete";
import clsx from "clsx";
import Link from "next/link";

export default function ListUser() {
  const dbUser = [
    {
      year: "1996",
      name: "Nguyễn Văn A",
      key: "21",
      majors: "Luật Sư",
    },
    {
      year: "1996",
      name: "Nguyễn Văn B",
      key: "21",
      majors: "Luật Sư",
    },
    {
      year: "1996",
      name: "Nguyễn Văn C",
      key: "21",
      majors: "Luật Sư",
    },
    {
      year: "1996",
      name: "Nguyễn Văn D",
      key: "21",
      majors: "Luật Sư",
    },
    {
      year: "1996",
      name: "Nguyễn Văn E",
      key: "21",
      majors: "Luật Sư",
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
      <div className={styles["title"]}>List User</div>
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
              <th scope="col">Name</th>
              <th scope="col">Năm Sinh</th>
              <th scope="col">Khóa</th>
              <th scope="col">Ngành</th>
            </tr>
          </thead>
          <tbody>
            {dbUser.map((item, i) => {
              return (
                <tr
                  key={i}
                  className={clsx(styles["border-none"], styles["row"])}
                >
                  <td>
                    <Link href="/admin/edit-user">
                      <a>
                        <p>{item.name}</p>
                      </a>
                    </Link>
                  </td>
                  <td>{item.year}</td>
                  <td>{item.key}</td>
                  <td>{item.majors}</td>
                  <td>
                    <button
                      type="button"
                      className={"btn btn-danger ml-2 " + styles["btn"]}
                      onClick={openPopupConfirm}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

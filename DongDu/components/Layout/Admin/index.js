import styles from "./admin-layout.module.css";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

const menus = [
  {
    value: "Quản Lý Blog",
    path: "admin",
    submenu: [
      {
        value: "List Blog",
        path: "list-blog",
      },
      {
        value: "Add Blog",
        path: "add-blog",
      },
      // {
      //   value: "Edit Blog",
      //   path: "edit-blog",
      // },
    ],
    icon: "/img/admin-blogs.svg",
  },
  {
    value: "Quản Lý User",
    path: "admin",
    submenu: [
      {
        value: "List User",
        path: "list-user",
      },
      {
        value: "Add User",
        path: "add-user",
      },
      // {
      //   value: "Edit User",
      //   path: "edit-user",
      // },
    ],
    icon: "/img/admin-users.svg",
  },
];

const Menu = ({ menu }) => {
  const arrow = useRef();
  function listing(n = 0) {
    const e = arrow.current;
    if (!e) return;

    if (e.classList.contains(styles["listing"])) {
      e.classList.remove(styles["listing"]);
      e.parentNode.parentNode.style.height = 35 + "px";
    } else {
      e.classList.add(styles["listing"]);
      e.parentNode.parentNode.style.height = 35 + n * 30 + 5 + "px";
    }
  }
  return (
    <>
      <img src={menu.icon} alt="" />
      <div className={clsx(styles["flex"], styles["border-bottom"])}>
        <div
          className={clsx(styles["menu"], styles["border-bottom"])}
          onClick={() => listing(menu.submenu.length)}
        >
          {menu.value}
          <svg viewBox="0 0 32 32" ref={arrow}>
            <path
              d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className={styles["submenu"]}>
          {menu.submenu.map((submenu, i) => (
            <div
              className={clsx(styles["element"], styles["border-bottom"])}
              key={i}
            >
              <Link href={submenu.path}>
                <a>{submenu.value}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Admin = ({ children }) => {
  const headRef = useRef();

  // useEffect(() => {
  //   headRef.current.addEventListener("transitionend", () => {
  //     if (!headRef.current.classList.contains(styles["nav-active"])) {
  //       headRef.current.style.backgroundColor = "#FFFFFF00";
  //     }
  //   });
  // }, []);
  const router = useRouter();
  let value = "Admin";
  if (router.pathname == "/admin/list-blog") {
    value = "Quản lý Blog / List Blog";
  } else if (router.pathname == "/admin/add-blog") {
    value = "Quản lý Blog / Add Blog";
  } else if (router.pathname == "/admin/edit-blog") {
    value = "Quản lý Blog / Edit Blog";
  } else if (router.pathname == "/admin/list-user") {
    value = "Quản lý User / List User";
  } else if (router.pathname == "/admin/add-user") {
    value = "Quản lý User / Add User";
  } else if (router.pathname == "/admin/edit-user") {
    value = "Quản lý User / Edit User";
  }

  function openMenu() {
    const nav = headRef.current;
    if (!nav) return;

    if (nav.classList.contains(styles["nav-active"])) {
      nav.classList.remove(styles["nav-active"]);
    } else {
      nav.classList.add(styles["nav-active"]);
    }
  }

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["nav"]} ref={headRef}>
          <div className={styles["logo"]}>
            <Link href="/">
              <a>
                <img src="/images/logo-obdd-dark.svg" alt="roxine" />
                <img src="/images/logo-obdd-light.svg" alt="roxine" />
              </a>
            </Link>
            <div className={styles["navbar-toggler"]} onClick={openMenu}>
              <span className={styles["navbar-toggler-icon"]}></span>
            </div>
          </div>
          <div className={styles["menus"]}>
            {menus.map((menu, i) => (
              <Menu menu={menu} key={i} />
            ))}
          </div>
        </div>
        <div className={styles["page"]}>
          <div className={styles["head"]}>
            <div className={styles["info"]}>
              <div className={styles["path"]}>{value}</div>
              <div className={styles["admin"]}>
                <div className={styles["avatar"]}>
                  <img src="/images/avata-admin.png"></img>
                </div>
                <div className={styles["name"]}>Admin OBOG</div>
              </div>
            </div>
          </div>
          <div className={styles["children"]}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Admin;

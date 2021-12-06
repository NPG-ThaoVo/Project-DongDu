import styles from "./blog-list.module.css";
import Blog from "./blog";
import RecentBlog from "./recent-blog";
import Banner from "../Contact/Banner/index";
import { useState } from "react";

export default function List() {
  const [blogList, setBlogList] = useState([
    "https://html.waituk.com/roxine/img/img-32.jpg",
    "https://html.waituk.com/roxine/img/img-33.jpg",
    "https://html.waituk.com/roxine/img/img-34.jpg",
    "https://html.waituk.com/roxine/img/img-35.jpg",
    "https://html.waituk.com/roxine/img/img-36.jpg",
    "https://html.waituk.com/roxine/img/img-37.jpg",
  ]);
  const [recentBlogs, setRecentBlog] = useState([
    "https://html.waituk.com/roxine/img/thumb.jpg",
    "https://html.waituk.com/roxine/img/thumb1.jpg",
    "https://html.waituk.com/roxine/img/thumb2.jpg",
    "https://html.waituk.com/roxine/img/thumb3.jpg",
  ]);
  const category = [
    "Cơ khí & Ôtô",
    "IT",
    "Giáo dục",
    "Kiến trúc & Xây dựng",
    "Dịch vụ",
    "Nhân sự",
    "Sản xuất công nghiệp",
    "Other",
  ];

  function filter(blogList) {
    //
    return blogList;
  }

  return (
    <>
      <div>
        <Banner />
      </div>
      <div className={styles["container"]}>
        <div className={styles["wrap"]}>
          <div className={styles["blog-list"]}>
            <div className={styles["grid"]}>
              {filter(blogList).map((blog, i) => (
                <Blog blog={blog} key={i} />
              ))}
            </div>
            <div className={styles["load-more"]}>
              <div>LOAD MORE</div>
            </div>
          </div>
          <div className={styles["side"]}>
            <div className={styles["side-wrap"]}>
              <div className={styles["title"]}>Blogs Gần Đây</div>
              <div className={styles["recent-blogs"]}>
                {recentBlogs.map((blog, i) => (
                  <>
                    <RecentBlog recentBlog={blog} key={i} />
                  </>
                ))}
              </div>
              <div className={styles["title"]}>Ngành Học</div>
              <div className={styles["category-list"]}>
                {category.map((type, i) => (
                  <>
                    <div key={i} className={styles["type"]} onClick={filter}>
                      {type}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

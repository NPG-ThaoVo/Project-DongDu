import styles from "./add-blog.module.css";
import { useRef, useState } from "react";
import Link from "next/link";
import { Editor } from "@tinymce/tinymce-react";
import clsx from "clsx";

export default function AddBlog() {
  const fileName = useRef();
  const contentRef = useRef(null);
  const majors = [
    "Cơ khí & Ôtô",
    "IT",
    "Giáo dục",
    "Kiến trúc & Xây dựng",
    "Dịch vụ",
    "Nhân sự",
    "Sản xuất công nghiệp",
    "Other",
  ];

  const [title, setTitle] = useState("");
  const [titleErr, setTitleErr] = useState(false);
  const [visibleState, setVisibleState] = useState("");
  const [visibleStateErr, setVisibleStateErr] = useState(false);
  const [major, setMajor] = useState(majors[0]);
  // const [majorErr, setMajorErr] = useState(false)
  const [majorDetail, setMajorDetail] = useState("");
  const [majorDetailErr, setMajorDetailErr] = useState(false);
  const [media, setMedia] = useState("");
  const [mediaErr, setMediaErr] = useState(false);
  //   const [content, setContent] = useState("");
  const [contentErr, setContentErr] = useState(false);
  const [comment, setComment] = useState("");
  const [commentErr, setCommentErr] = useState(false);

  const handleAvataChange = (e) => {
    let file = e.target.files[0];
    if (file && file.size > 10000000) {
      setMediaErr("Max size err");
      setMedia("");
      return;
    }
    let reader = new FileReader();
    reader.onloadend = () => {
      setMedia(reader.result);
      setMediaErr(false);
      fileName.current.innerHTML = file.name;
      fileName.current.style.opacity = 0.8;
      fileName.current.style.color = "#24669E";
    };
    try {
      reader.readAsDataURL(file);
    } catch (err) {
      fileName.current.innerHTML = "Error! Please try again.";
      fileName.current.style.color = "#dc3545";
      console.log(err);
    }
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title": {
        setTitle(e.target.value);
        setTitleErr(false);
        break;
      }
      case "visibleState": {
        setVisibleState(e.target.value);
        setVisibleStateErr(false);
        break;
      }
      case "major": {
        setMajor(e.target.value);
        break;
      }
      case "majorDetail": {
        setMajorDetail(e.target.value);
        setMajorDetailErr(false);
        break;
      }
      case "content": {
        setContent(e.target.value);
        setContentErr(false);
        break;
      }
      case "comment": {
        setComment(e.target.value);
        setCommentErr(false);
        break;
      }
    }
  };

  const onSubmit = () => {
    const content = contentRef.current?.getContent({ format: "html" })?.trim();

    // console.log("content:", content);

    if (!title.trim()) {
      setTitleErr(true);
    }
    if (!visibleState.trim()) {
      setVisibleStateErr(true);
    }
    if (!media) {
      setMediaErr(true);
    }
    if (!majorDetail) {
      setMajorDetailErr(true);
    }
    if (!content.trim()) {
      setContentErr(true);
    } else setContentErr(false);
    if (!comment.trim()) {
      setCommentErr(true);
    }
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>Add Blog</div>
        <div className={styles["divider"]} />
        <div className={styles["content"]}>
          <div className={styles["row"]}>
            <div className={styles["name"]}>Tiêu đề</div>
            <div className={styles["input"]}>
              <input
                className={
                  titleErr ? "form-control is-invalid" : "form-control"
                }
                name="title"
                onChange={onChange}
              />
              {!titleErr || <label>Không hợp lệ</label>}
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["name"]}>Trạng thái hiển thị</div>
            <div className={styles["input"]}>
              <input
                className={
                  visibleStateErr ? "form-control is-invalid" : "form-control"
                }
                name="visibleState"
                onChange={onChange}
              />
              {!visibleStateErr || <label>Không hợp lệ</label>}
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["name"]}>Ngành</div>
            <div className={styles["select"] + " " + styles["input"]}>
              <select
                className="form-control"
                defaultValue={majors[0]}
                name="major"
                onChange={onChange}
              >
                {majors.map((major, i) => (
                  <option value={major} key={i}>
                    {major}
                  </option>
                ))}
              </select>
              <svg viewBox="0 0 32 32">
                <path
                  d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["name"]}>Ngành detail</div>
            <div className={styles["input"]}>
              <input
                className={
                  majorDetailErr ? "form-control is-invalid" : "form-control"
                }
                name="majorDetail"
                onChange={onChange}
              />
              {!majorDetailErr || <label>Không hợp lệ</label>}
            </div>
          </div>
          <div className={styles["row"]}>
            <div className={styles["name"]}>Media</div>
            <div className={styles["input"]}>
              <input
                className={styles["upload"] + " form-control"}
                type="file"
                accept="image/*"
                onChange={handleAvataChange}
              />
              <input
                className={
                  mediaErr || mediaErr === "Max size err"
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <div className={styles["icon"]}>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                <div ref={fileName}>Add media</div>
              </div>
              {mediaErr !== true || <label>Không hợp lệ</label>}
              {!(mediaErr === "Max size err") || (
                <label>{"File size <= 10MB"}</label>
              )}
            </div>
          </div>
          <div className={styles["row-textarea"]}>
            <div className={styles["name-textarea"]}>Nội dung</div>
            <div className={styles["input"]}>
              {/* <textarea
                className={
                  contentErr ? "form-control is-invalid" : "form-control"
                }
                name="content"
                onChange={onChange}
              /> */}
              <div
                className={clsx(
                  contentErr && styles["editor-invalid"],
                  styles["editor"]
                )}
              >
                <Editor
                  apiKey="w6roqzce2jobxf7vwv74203uxdg1g55ogt8b78ghmw5es1d3"
                  onInit={(evt, editor) => (contentRef.current = editor)}
                  init={{
                    selector: "textarea#open-source-plugins",
                    plugins:
                      "print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
                    imagetools_cors_hosts: ["picsum.photos"],
                    menubar: "file edit view insert format tools table help",
                    toolbar:
                      "bold italic underline strikethrough fontsizeselect | fontselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview print | quickimage image media template link anchor codesample | ltr rtl",
                    toolbar_sticky: true,
                    autosave_ask_before_unload: true,
                    autosave_interval: "30s",
                    autosave_prefix: "{path}{query}-{id}-",
                    autosave_restore_when_empty: false,
                    autosave_retention: "2m",
                    image_advtab: true,
                    link_list: [
                      // { title: "My page 1", value: "https://www.tiny.cloud" },
                      // { title: "My page 2", value: "http://www.moxiecode.com" }
                    ],
                    image_list: [
                      // { title: "My page 1", value: "https://www.tiny.cloud" },
                      // { title: "My page 2", value: "http://www.moxiecode.com" }
                    ],
                    image_class_list: [
                      // { title: "None", value: "" },
                      // { title: "Some class", value: "class-name" }
                    ],
                    importcss_append: true,
                    //   file_picker_callback: function (callback, value, meta) {
                    //     /* Provide file and text for the link dialog */
                    //     if (meta.filetype === "file") {
                    //       callback("https://www.google.com/logos/google.jpg", {
                    //         text: "My text"
                    //       });
                    //     }

                    //     /* Provide image and alt text for the image dialog */
                    //     if (meta.filetype === "image") {
                    //       callback("https://www.google.com/logos/google.jpg", {
                    //         alt: "My alt text"
                    //       });
                    //     }

                    //     /* Provide alternative source and posted for the media dialog */
                    //     if (meta.filetype === "media") {
                    //       callback("movie.mp4", {
                    //         source2: "alt.ogg",
                    //         poster: "https://www.google.com/logos/google.jpg"
                    //       });
                    //     }
                    //   },
                    //   templates: [
                    //     {
                    //       title: "New Table",
                    //       description: "creates a new table",
                    //       content:
                    //         '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
                    //     },
                    //     {
                    //       title: "Starting my story",
                    //       description: "A cure for writers block",
                    //       content: "Once upon a time..."
                    //     },
                    //     {
                    //       title: "New list with dates",
                    //       description: "New List with dates",
                    //       content:
                    //         '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
                    //     }
                    //   ],
                    //   template_cdate_format:
                    //     "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
                    //   template_mdate_format:
                    //     "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
                    height: 300,
                    image_caption: true,
                    quickbars_selection_toolbar:
                      "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
                    noneditable_noneditable_class: "mceNonEditable",
                    toolbar_mode: "sliding",
                    contextmenu: "link image imagetools table",
                    //   skin: useDarkMode ? "oxide-dark" : "oxide",
                    //   content_css: useDarkMode ? "dark" : "default",
                    paste_data_images: true,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
              </div>

              {!contentErr || <label>Không hợp lệ</label>}
            </div>
          </div>
          <div className={styles["row-textarea"]}>
            <div className={styles["name-textarea"]}>Comment</div>
            <div className={styles["input"]}>
              <textarea
                className={
                  commentErr ? "form-control is-invalid" : "form-control"
                }
                name="comment"
                onChange={onChange}
              />
              {!commentErr || <label>Không hợp lệ</label>}
            </div>
          </div>

          <div className={styles["btns"]}>
            <div>
              <Link href="/admin/list-blog">
                <a>Cancel</a>
              </Link>
            </div>
            <div onClick={onSubmit}>Create Blog</div>
          </div>
        </div>
      </div>
    </>
  );
}

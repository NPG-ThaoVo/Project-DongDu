import styles from './edit-blog.module.css'
import { useRef, useState } from 'react'

export default function EditBlog(){
    const fileName = useRef();
    const majors = ['Cơ khí & Ôtô', 'IT', 'Giáo dục', 'Kiến trúc & Xây dựng', 'Dịch vụ', 'Nhân sự', 'Sản xuất công nghiệp', 'Other']
    
    const [title, setTitle] = useState('')
    const [titleErr, setTitleErr] = useState(false)
    const [visibleState, setVisibleState] = useState('')
    const [visibleStateErr, setVisibleStateErr] = useState(false)
    const [major, setMajor] = useState(majors[0])
    // const [majorErr, setMajorErr] = useState(false)
    const [majorDetail, setMajorDetail] = useState('')
    const [majorDetailErr, setMajorDetailErr] = useState(false)
    const [media, setMedia] = useState('')
    const [mediaErr, setMediaErr] = useState(false)
    const [content, setContent] = useState('')
    const [contentErr, setContentErr] = useState(false)
    const [comment, setComment] = useState('')
    const [commentErr, setCommentErr] = useState(false)

    const handleAvataChange = (e) => {
        let file = e.target.files[0]
        if(file && file.size > 10000000){
            setMediaErr('Max size err')
            setMedia('')
            return
        }
        let reader = new FileReader()
        reader.onloadend = () =>{
            setMedia(reader.result)
            setMediaErr(false)
            fileName.current.innerHTML = file.name
            fileName.current.style.opacity = .8
            fileName.current.style.color = '#24669E'
        }
        try{
            reader.readAsDataURL(file)
        }catch(err){
            fileName.current.innerHTML = 'Error! Please try again.'
            fileName.current.style.color = '#dc3545'
            console.log(err)
        }
    };
    
    const onChange = (e) => {
        switch(e.target.name){
            case 'title': {
                setTitle(e.target.value)
                setTitleErr(false)
                break
            }
            case 'visibleState': {
                setVisibleState(e.target.value)
                setVisibleStateErr(false)
                break
            }
            case 'major': {
                setMajor(e.target.value)
                break
            }
            case 'majorDetail': {
                setMajorDetail(e.target.value)
                setMajorDetailErr(false)
                break
            }
            case 'content': {
                setContent(e.target.value)
                setContentErr(false)
                break
            }
            case 'comment': {
                setComment(e.target.value)
                setCommentErr(false)
                break
            }
        }
    }

    const onSubmit = () => {
        if(!title.trim()){
            setTitleErr(true)
        }
        if(!visibleState.trim()){
            setVisibleStateErr(true)
        }
        if(!media){
            setMediaErr(true)
        }
        if(!majorDetail){
            setMajorDetailErr(true)
        }
        if(!content.trim()){
            setContentErr(true)
        }
        if(!comment.trim()){
            setCommentErr(true)
        }
    }

    return <>
        <div className={styles['container']}>
            <div className={styles['title']}>
                Edit Blog
            </div>
            <div className={styles['divider']}/>
            <div className={styles['content']}>
                <div className={styles['row']}>
                    <div className={styles['name']}>Tiêu đề</div>
                    <div className={styles['input']}>
                        <input className={titleErr? 'form-control is-invalid':'form-control'} name='title' onChange={onChange}/>
                        {!titleErr || <label>Không hợp lệ</label>}
                    </div>
                </div>
                <div className={styles['row']}>
                    <div className={styles['name']}>Trạng thái hiển thị</div>
                    <div className={styles['input']}>
                        <input className={visibleStateErr? 'form-control is-invalid':'form-control'} name='visibleState' onChange={onChange}/>
                        {!visibleStateErr || <label>Không hợp lệ</label>}
                    </div>
                </div>
                <div className={styles['row']}>
                    <div className={styles['name']}>Ngành</div>
                    <div className={styles['select']+' '+styles['input']}>
                        <select className='form-control' defaultValue={majors[0]} name='major' onChange={onChange}>
                            {majors.map((major,i)=>(
                                <option value={major} key={i}>{major}</option>
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
                <div className={styles['row']}>
                    <div className={styles['name']}>Ngành detail</div>
                    <div className={styles['input']}>
                        <input className={majorDetailErr? 'form-control is-invalid':'form-control'} name='majorDetail' onChange={onChange}/>
                        {!majorDetailErr || <label >Không hợp lệ</label>}
                    </div>
                </div>
                <div className={styles['row']}>
                    <div className={styles['name']}>Media</div>
                    <div className={styles['input']}>
                        <input className={styles['upload']+" form-control"} type='file' accept="image/*" onChange={handleAvataChange}/>
                        <input className={(mediaErr||mediaErr === 'Max size err')? 'form-control is-invalid':'form-control'}/>
                        <div className={styles['icon']}>
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                            <div ref={fileName}>Add media</div>
                        </div>
                        {mediaErr!==true || <label>Không hợp lệ</label>}
                        {!(mediaErr === 'Max size err') || <label>{'File size <= 10MB'}</label>}
                    </div>
                </div>
                <div className={styles['row-textarea']}>
                    <div className={styles['name-textarea']}>Nội dung</div>
                    <div className={styles['input']}>
                        <textarea className={contentErr? 'form-control is-invalid':'form-control'} name='content' onChange={onChange}/>
                        {!contentErr || <label>Không hợp lệ</label>}
                    </div>
                </div>
                <div className={styles['row-textarea']}>
                    <div className={styles['name-textarea']}>Comment</div>
                    <div className={styles['input']}>
                        <textarea className={commentErr? 'form-control is-invalid':'form-control'} name='comment' onChange={onChange}/>
                        {!commentErr || <label>Không hợp lệ</label>}
                    </div>
                </div>
                
                <div className={styles['btns']}>
                    <div>Cancel</div>
                    <div onClick={onSubmit}>Edit Blog</div>
                </div>
            </div>
        </div>
    </>
}
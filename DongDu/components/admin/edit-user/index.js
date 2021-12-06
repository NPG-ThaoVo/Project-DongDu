import styles from './edit-user.module.css'
import { useRef, useState } from 'react'

export default function EditUser(){
    const fileName = useRef()
    const minBirth = 1990
    const maxBirthRang = 4
    const birthList = () => {
        const currentYear = new Date().getFullYear()
        const years = []
        for(let y=minBirth; y<=(currentYear-maxBirthRang);y++)
            years.push(y)
        
        return years
    }
    const majors = ['Cơ khí & Ôtô', 'IT', 'Giáo dục', 'Kiến trúc & Xây dựng', 'Dịch vụ', 'Nhân sự', 'Sản xuất công nghiệp', 'Other']
    const academicData = ['k111','k112','k113']

    const [name, setName] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [birth, setBirth] = useState(birthList().pop())
    // const [birthErr, setBirthErr] = useState(false)
    const [academic, setAcademic] = useState(academicData[0])
    // const [academicErr, setAcademicErr] = useState(false)
    const [major, setMajor] = useState(majors[0])
    // const [majorErr, setMajorErr] = useState(false)
    const [majorDetail, setMajorDetail] = useState('')
    const [majorDetailErr, setMajorDetailErr] = useState(false)
    const [avatar, setAvatar] = useState('')
    const [avatarErr, setAvatarErr] = useState(false)
    const [note, setNote] = useState('')
    const [noteErr, setNoteErr] = useState(false)

    const handleAvataChange = (e) => {
        let file = e.target.files[0]
        if(file && file.size > 3000000){
            setAvatarErr('Max size err')
            setAvatar('')
            return
        }
        let reader = new FileReader()
        reader.onloadend = () =>{
            setAvatar(reader.result)
            setAvatarErr(false)
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
            case 'name': {
                setName(e.target.value)
                setNameErr(false)
                break
            }
            case 'birth': {
                setBirth(e.target.value)
                break
            }
            case 'academic': {
                setAcademic(e.target.value)
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
            case 'note': {
                setNote(e.target.value)
                setNoteErr(false)
                break
            }
        }
    }

    const onSubmit = () => {
        if(!name.trim()){
            setNameErr(true)
        }
        if(!majorDetail.trim()){
            setMajorDetailErr(true)
        }
        if(!avatar){
            setAvatarErr(true)
        }
        if(!note.trim()){
            setNoteErr(true)
        }
        if(note.length>500){
            setNoteErr('max length err')
        }
    }

    return <>
        <div className={styles['container']}>
            <div className={styles['title']}>
                Edit User
            </div>
            <div className={styles['divider']}/>
            <div className={styles['content']}>
                <div className={styles['row']}>
                    <div className={styles['name']}>Họ và tên</div>
                    <div className={styles['input']}>
                        <input className={nameErr? 'form-control is-invalid':'form-control'} name='name' onChange={onChange}/>
                        {!nameErr || <label>Không hợp lệ</label>}
                    </div>
                </div>
                <div className={styles['row']}>
                    <div className={styles['name']}>Năm sinh</div>
                    <div className={styles['input']+' '+styles['input-flex']}>
                        <div className={styles['wrap-icon']}>
                            <select className='form-control' defaultValue={birthList().pop()} name='birth' onChange={onChange}>
                                {birthList().map((y,i)=>(
                                    <option value={y} key={i}>{y}</option>
                                ))}
                            </select>
                            <svg viewBox="0 0 32 32" className={styles['dropdown-icon']}>
                                <path
                                d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                                fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className={styles['row']}>
                            <div className={styles['name']}>Khóa</div>
                            <div className={styles['input']}>
                                <select className='form-control' defaultValue={academicData[0]} name='academic' onChange={onChange}>
                                    {academicData.map((k,i)=>(
                                        <option value={k} key={i}>{k}</option>
                                    ))}
                                </select>
                                <svg viewBox="0 0 32 32" className={styles['dropdown-icon']}>
                                    <path
                                    d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
                                    fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
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
                        <svg viewBox="0 0 32 32" className={styles['dropdown-icon']}>
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
                        {!majorDetailErr || <label>Không hợp lệ</label>}
                    </div>
                </div>
                <div className={styles['row']}>
                    <div className={styles['name']}>Avatar</div>
                    <div className={styles['input']}>
                        <input className={styles['upload']+" form-control"} type='file' accept="image/*" onChange={handleAvataChange}/>
                        <input className={(avatarErr||avatarErr === 'Max size err')? 'form-control is-invalid':'form-control'} />
                        <div className={styles['icon']}>
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                            </svg>
                            <div ref={fileName}>Add Avatar</div>
                        </div>
                        {avatarErr!==true || <label>Không hợp lệ</label>}
                        {!(avatarErr === 'Max size err') || <label>{'File size <= 3MB'}</label>}
                    </div>
                </div>
                <div className={styles['row-textarea']}>
                    <div className={styles['name-textarea']}>Note</div>
                    <div className={styles['input']}>
                        <textarea className={noteErr? 'form-control is-invalid':'form-control'} name='note' onChange={onChange}/>
                        {noteErr!==true || <label>Không hợp lệ</label>}
                        {!(noteErr==='max length err') || <label>Không hợp lệ</label>}
                    </div>
                </div>
                
                <div className={styles['btns']}>
                    <div>Cancel</div>
                    <div onClick={onSubmit}>Edit User</div>
                </div>
            </div>
        </div>
    </>
}
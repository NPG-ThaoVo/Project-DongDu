import styles from './recent-blog.module.css'
export default function RecentBlog({recentBlog}){

    return <>
        <a className={styles['wrap']} href='#'>
            <img src={recentBlog} alt='' className={styles['avatar']}/>
            <div className={styles['content']}>
                <h6>Left Sidebar Portfolio</h6>
                <p>7 Comments</p>
            </div>
        </a>
    </>
}
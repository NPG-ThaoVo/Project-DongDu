import styles from './popup-delete.module.css'

export default function PopupDelete({cancelDelete}){

    return <>
        <div className={styles['wrap']}>
            <div className={styles['popup']}>
                <div className={styles['icon']}>
                    <img src='/images/trash-icon.svg' alt=''/>
                </div>
                <div className={styles['title']}>
                    Bạn có chắc chắn muốn xóa không?
                </div>
                <div className={styles['message']}>
                    Bạn có thực sự muốn xóa những dữ liệu này không? Không thể khôi phục dữ liệu này!
                </div>
                <div className={styles['btns']}>
                    <div onClick={cancelDelete}>Cancel</div>
                    <div>Delete</div>
                </div>

                <div className={styles['cross']}>
                    <svg viewBox="0 0 490.29 490.29"  onClick={cancelDelete} fill='currentColor'>
                        <g>
                            <g>
                                <g>
                                    
                                        <rect x="206.343" y="-62.678" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 591.6399 245.173)" width="77.399" height="615.594"/>
                                    
                                        <rect x="-9.144" y="335.976" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -231.1054 191.4143)" width="249.298" height="77.399"/>
                                    
                                        <rect x="250.136" y="77.228" transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 721.7715 -67.1118)" width="249.298" height="77.399"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </>
}
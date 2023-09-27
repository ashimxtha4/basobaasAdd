import style from '../../../styles/basicDetail.module.css'

const SmallRadio = (props:any) => {
  return (
    <>
        <span className={style.radioDivSpan}>
            <label className={style.customRadio}>
                <input type="radio" name="adCategory" value={props.value} className={style.radio} />
                <span className={style.checkmark}></span>
            </label>
            {props.value}
        </span>
    </>
  )
}

export default SmallRadio
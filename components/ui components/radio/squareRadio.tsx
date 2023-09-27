import style from '../../../styles/basicDetail.module.css'

function SquareRadio(props:any) {
  return (
    <label className={style.propertyCategoryCard}>
        <input type="radio" name="propertyCategory" value={props.value} className={style.categoryRadio} />
        <div className={style.div}>
            <span>{props.icon}</span> 
                <p>{props.value}</p>
        </div>
    </label>
  )
}

export default SquareRadio
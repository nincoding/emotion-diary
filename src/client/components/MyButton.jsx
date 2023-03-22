/**
 * type으로는 3가지 type을 전달받는다.
 * 이 타입을 전달받지않으면 default라고 생각
 * positive, 
 */

const MyButton = ({ text, type, onClick }) => {

  // type으로 전달되는 문자가 해당 배열에 있다면 type으로 없다면 'default'로 설정
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
    // className에 배열을 넣어서 조작하지만 문자열로 되어야하기 때문에 join사용
    // 띄어쓰기를 기준으로 합쳐져서 className 두개를 가짐
      className={["MyButton",`MyButton_${btnType}`].join(" ")}
      onClick={onClick}>
      {text}
    </button>
  )
}

MyButton.defaultProps = {
  type: 'default',
}

export default MyButton;
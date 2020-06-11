/*class HelloReact extends React.Component {
  render() {
    return(
      <h1>Hello React!</h1>
    )
  }
} */

function formatInfo(student) {
    return student.name + "[" + student.id + "]";
  }
  
  const student = {
    id:"20153157",
    name: "Dongbin Na",
    color: 'blue' 
  }
  
  //{formatInfo(student)} 내부에 {}가 JSX

  const element = (
    <h3 class={student.color}>
      {formatInfo(student)} 
    </h3>
  );
  
 //ReactDOM은 그리게 도와줌
  ReactDOM.render(element, document.getElementById('root'));
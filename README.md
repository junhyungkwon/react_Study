# react_Study

React 문법 정리

- 리액트는 사용자 정의 태그를 만드는 기술입니다.
- Props는 컴포넌트의 외부에서 사용하는 입력값입니다.
- State는 컴포넌트 내부에서 사용하는 값입니다.
- 이벤트는 Props를 이용합니다.
- Props는 컴포넌트를 사용하는 외부자를 의한 데이터
- Props라는 데이터는 사용자가 컴포넌트로 전달한 명령
- Props는 외부자가 내부자로 전달하는 값
- State 컴포넌트를 만드는 내부자를 의한 데이터
- event.preventDefault()를 이용해서 기본동작을 비활성화 할 수 있습니다.
- form을 변경할 때는 Props를 State로 전환 후 onChange를 이용합니다.
- ↓↓↓↓↓↓↓↓useState Study ↓↓↓↓↓↓
- const [test, setTest] =useState([1])
  newtest = [...test]
  newtest.push(2)
  setTest(newtest);

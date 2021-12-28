import create from "zustand";

// 스토어
const useStore = create(set => ({
  textState: "",
  setTextState: (text) => set(() => ({ textState: text })),
}));

// CharacterCounter 컴포넌트
export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

// 텍스트인풋 컴포넌트
function TextInput() {
  const [text, setText] = useStore(
    (state) => [
      state.textState,
      state.setTextState,
    ]
  );

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

// 캐릭터카운트 컴포넌트
function CharacterCount() {
  const count = useStore(state => state.textState.length)

  return <>Character Count: {count}</>;
}

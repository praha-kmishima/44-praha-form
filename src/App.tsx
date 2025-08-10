import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
    console.log("名前:", name);
    console.log("性別:", gender);
  };

  return (
    <>
      <h1>フォーム</h1>
      <div>
        <label>
          名前:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        性別:
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "男性"}
            onChange={e => setGender(e.target.value)}
          />
          男性
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "女性"}
            onChange={e => setGender(e.target.value)}
          />
          女性
        </label>
      </div>
      <button type="button" onClick={handleSubmit}>
        送信
      </button>
    </>
  );
}

export default App

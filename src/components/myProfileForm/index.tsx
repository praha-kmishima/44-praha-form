import { useCustomForm, type FormValues } from "./useCustomForm";

export const MyProfileForm = () => {
  const { register, handleSubmit, errors } = useCustomForm();

  const onSubmit = (data: FormValues) => {
    console.log("名前:", data.name);
    console.log("性別:", data.gender);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          名前:
          <input
            type="text"
            {...register("name", {
              required: "名前は必須です",
              maxLength: {
                value: 10,
                message: "名前は10文字以内で入力してください",
              },
            })}
          />
        </label>
        {errors.name && (
          <div style={{ color: "red" }}>{errors.name.message}</div>
        )}
      </div>
      <div>
        性別:
        <label>
          <input
            type="radio"
            value="男性"
            {...register("gender")}
          />
          男性
        </label>
        <label>
          <input
            type="radio"
            value="女性"
            {...register("gender")}
          />
          女性
        </label>
      </div>
      <button type="submit">送信</button>
    </form>
  );
};
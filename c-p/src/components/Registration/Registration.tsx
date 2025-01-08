import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// تعریف اسکیما با Zod
const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }).max(8,{message:'aaaaaaaa'}),
  lastName: z.string().min(1, { message: "Last name is required" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }),
});

// تعریف نوع داده‌های فرم با استفاده از TypeScript
type FormData = {
  firstName: string;
  lastName: string;
  age: number;
};

function MyForm() {
  // استفاده از useForm و نوع‌دهی برای داده‌های فرم
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema), // استفاده از Zod برای اعتبارسنجی
  });

  // تابعی که پس از ارسال فرم اجرا می‌شود
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;

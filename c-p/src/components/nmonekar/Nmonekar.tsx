import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import Hede from '../pages1/Hehe';
import Footer from '../pages10/footer';
import Navbarrej from '../navbarRej/Navbar';
import { FaCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

const schema = z.object({
  image1: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "ارسال فایل الزامی می‌باشد",
    })
    .refine((file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file.type), {
      message: "فقط فایل‌های تصویری (jpg, png, gif) مجاز هستند",
    }),
  image2: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "ارسال فایل الزامی می‌باشد",
    })
    .refine((file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file.type), {
      message: "فقط فایل‌های تصویری (jpg, png, gif) مجاز هستند",
    }),
  image3: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "ارسال فایل الزامی می‌باشد",
    })
    .refine((file) => ['image/jpeg', 'image/png', 'image/gif'].includes(file.type), {
      message: "فقط فایل‌های تصویری (jpg, png, gif) مجاز هستند",
    }),
});

type FormData = z.infer<typeof schema>;

function Nmonekar() {
  const { register, handleSubmit, formState: { errors }, trigger, clearErrors } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [fileNames, setFileNames] = useState<string[]>(['', '', '']);
  const [imagePreviews, setImagePreviews] = useState<string[]>(['', '', '']);

  const handleFileChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileName = file.name;
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => {
          const newPreviews = [...prevPreviews];
          newPreviews[index] = reader.result as string; 
          return newPreviews;
        });

        setFileNames((prevFileNames) => {
          const newFileNames = [...prevFileNames];
          newFileNames[index] = fileName;
          return newFileNames;
        });
      

        clearErrors(`image${index + 1}` as keyof FormData);
        trigger(`image${index + 1}` as keyof FormData);
      };

      reader.readAsDataURL(file);
    } else {
      setImagePreviews((prevPreviews) => {
        const newPreviews = [...prevPreviews];
        newPreviews[index] = '';
        return newPreviews;
      });
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };
  const [resolvedErrors, setResolvedErrors] = useState<Record<string, boolean>>({
    image1: false,
    image2: false,
    image3: false,
  });

    useEffect(() => {
      const interval = setInterval(() => {
        trigger();
        Object.entries(errors).forEach(([field, error]) => {
          if (!error) {
            setResolvedErrors((prevState) => ({
              ...prevState,
              [field]: true,
            }));
          }
        });
      }, 1000);
  
      return () => clearInterval(interval);
    }, [errors, trigger]);

  return (
    <>
      <Hede />
      <Navbarrej />
      <div className="float-end mr-20">
        <span className="text-jigary text-base font-sans">فرم ثبت نام اطلاعات</span>
      </div>

      <div className="grid grid-cols-5 mt-10">
        <div className="col-span-2">
          <img className="shadow-sm h-96 ml-20 w-96 mt-20" src="img/file.png" alt="" />
        </div>

        <form className="col-span-3 mt-10 border border-gray-100 rounded-xl mr-10 shadow-2xl p-8" onSubmit={handleSubmit(onSubmit)}>
          {/* نمایش ارورهای کلی */}
           <div className="border border-red-500 p-4 rounded-lg mb-4">
                     <h2 className="font-bold text-lg text-right">لیست ارورها</h2>
                     <ul className="mt-4">
                       {Object.entries(errors).map(([field, error]) => (
                         <li key={field} className={`flex items-center justify-end text-ff ${resolvedErrors[field] ? 'text-green-500' : 'text-red-500 '}`}>
                           {resolvedErrors[field] ? <FaCheck className="mr-2" /> : <FaTimes className="mr-2" />}
                           {error?.message}
                         </li>
                       ))}
                     </ul>
           </div>
         

          {/* فرم ورودی‌ها */}
          {['فایل شماره 1', 'فایل شماره 2', 'فایل شماره 3'].map((label, index) => (
            <div key={index} className="mb-4 text-left">
              <label className="block mb-2 text-gray-500 text-sm">{label}</label>
              <div className="flex items-center space-x-4">
                {/* دکمه انتخاب فایل به سمت راست و رنگ خاکستری کم‌رنگ */}
                <label htmlFor={`file-input-${index}`} className="btn btn-sm btn-outline text-xs text-gray-400 hover:text-gray-600">
                  انتخاب فایل
                </label>
                <input
                  type="file"
                  id={`file-input-${index}`}
                  className="hidden"
                  {...register(`image${index + 1}` as keyof FormData)} 
                  onChange={handleFileChange(index)}
                />

                {/* پیش‌نمایش تصویر */}
                {imagePreviews[index] && (
                  <img
                    src={imagePreviews[index]}
                    alt={`preview-${index}`}
                    className="w-16 h-16 object-cover border border-gray-300 rounded-lg"
                  />
                )}

                {/* نمایش نام فایل */}
                <span className="text-xs text-gray-600">
                  {fileNames[index] || 'فایلی انتخاب نشده'}
                </span>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-active btn-sm mb-2 text-xs">ثبت</button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Nmonekar;

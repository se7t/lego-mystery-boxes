import { useForm, SubmitHandler } from "react-hook-form";
import { validationRegExp } from "@/lib/validationRegExp";
import axios from "axios";
import { useContext } from "react";
import { MinifigContext } from "@/lib/MinifigContext";
import { useRouter } from "next/router";

type FormValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  setName: string;
  setId: string;
};

const Form = () => {
  const { chosenMinifig, resetStates } = useContext(MinifigContext);
  const router = useRouter();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      setName: chosenMinifig.name,
      setId: chosenMinifig.set_num,
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    axios({
      method: "post",
      url: "http://httpbin.org/post",
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
        router.push("/");
        resetStates();
      })
      .catch((res) => {
        console.error(res);
      });
  };

  return (
    <div className="flex-shrink flex-grow flex-col">
      <h1 className="text-bold mb-12 font-display text-5xl uppercase text-white sm:text-6xl">
        Shipping Details
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-stretch"
      >
        <div className="mb-4 flex flex-wrap gap-8">
          <div className="flex flex-grow flex-col">
            <label htmlFor="firstName" className="mb-2 font-bold text-white">
              First Name
            </label>
            <input
              placeholder="John"
              {...register("firstName", {
                required: "This field is required.",
                pattern: {
                  value: validationRegExp.name,
                  message: "Invalid characters.",
                },
              })}
              className={`rounded p-3 font-bold ${
                errors.firstName && "outline-3 outline outline-red-600"
              }`}
            />
            {errors.firstName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="flex flex-grow flex-col">
            <label htmlFor="lastName" className="mb-2 font-bold text-white">
              Last Name
            </label>
            <input
              placeholder="Doe"
              {...register("lastName", {
                required: "This field is required.",
                pattern: {
                  value: validationRegExp.name,
                  message: "Invalid characters.",
                },
              })}
              className={`rounded p-3 font-bold ${
                errors.lastName && "outline-3 outline outline-red-600"
              }`}
            />
            {errors.lastName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="phoneNumber" className="mb-2 font-bold text-white">
            Phone Number
          </label>
          <input
            placeholder="+11 (111) 111-11"
            {...register("phoneNumber", {
              required: "This field is required.",
              pattern: {
                value: validationRegExp.phoneNumber,
                message: "Invalid phone number.",
              },
            })}
            className={`rounded p-3 font-bold ${
              errors.phoneNumber && "outline-3 outline outline-red-600"
            }`}
          />
          {errors.phoneNumber && (
            <p className="mt-2 text-sm text-red-400">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="mb-2 font-bold text-white">
            Email
          </label>
          <input
            placeholder="john.doe@example.com"
            {...register("email", {
              required: "This field is required.",
              pattern: {
                value: validationRegExp.email,
                message: "Invalid email address.",
              },
            })}
            className={`rounded p-3 font-bold ${
              errors.email && "outline-3 outline outline-red-600"
            }`}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="birthDate" className="mb-2 font-bold text-white">
            Date of Birth
          </label>
          <input
            placeholder="24/01/1990"
            {...register("birthDate", {
              required: "This field is required.",
              pattern: {
                value: validationRegExp.birthDate,
                message: "Invalid birth date.",
              },
            })}
            className={`rounded p-3 font-bold ${
              errors.birthDate && "outline-3 outline outline-red-600"
            }`}
          />
          {errors.birthDate && (
            <p className="mt-2 text-sm text-red-400">
              {errors.birthDate.message}
            </p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="address" className="mb-2 font-bold text-white">
            Address
          </label>
          <input
            placeholder="308 Negra Aroya Lane"
            {...register("address", {
              required: "This field is required.",
              pattern: {
                value: validationRegExp.address,
                message: "Invalid address.",
              },
            })}
            className={`rounded p-3 font-bold ${
              errors.address && "outline-3 outline outline-red-600"
            }`}
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-400">
              {errors.address.message}
            </p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="city" className="mb-2 font-bold text-white">
            City
          </label>
          <input
            placeholder="Albuquerque"
            {...register("city", {
              required: "This field is required.",
              pattern: {
                value: validationRegExp.city,
                message: "Invalid city.",
              },
            })}
            className={`rounded p-3 font-bold ${
              errors.city && "outline-3 outline outline-red-600"
            }`}
          />
          {errors.city && (
            <p className="mt-2 text-sm text-red-400">{errors.city.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-wrap gap-8">
          <div className="flex flex-grow flex-col">
            <label htmlFor="state" className="mb-2 font-bold text-white">
              State
            </label>
            <input
              placeholder="New Mexico"
              {...register("state", {
                required: "This field is required.",
                pattern: {
                  value: validationRegExp.state,
                  message: "Invalid state.",
                },
              })}
              className={`rounded p-3 font-bold ${
                errors.state && "outline-3 outline outline-red-600"
              }`}
            />
            {errors.state && (
              <p className="mt-2 text-sm text-red-400">
                {errors.state.message}
              </p>
            )}
          </div>
          <div className="mb-4 flex flex-grow flex-col">
            <label htmlFor="zipCode" className="mb-2 font-bold text-white">
              Zip Code
            </label>
            <input
              placeholder="87104"
              {...register("zipCode", {
                required: "This field is required.",
                pattern: {
                  value: validationRegExp.zipCode,
                  message: "Invalid zip code.",
                },
              })}
              className={`rounded p-3 font-bold ${
                errors.zipCode && "outline-3 outline outline-red-600"
              }`}
            />
            {errors.zipCode && (
              <p className="mt-2 text-sm text-red-400">
                {errors.zipCode.message}
              </p>
            )}
          </div>
        </div>
        <input {...register("setName")} className="hidden" />
        <input {...register("setId")} className="hidden" />
        <input
          type="submit"
          className={`active:px-25 font-sans rounded-full bg-blue-500 px-24 py-3 text-center text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700 ${
            !isValid && "pointer-events-none opacity-75 saturate-0"
          }`}
        />
      </form>
    </div>
  );
};

export default Form;

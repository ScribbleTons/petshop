import { useState } from "react";
import Input from "../components/input";
import TextArea from "../components/textarea";
import TitleWrapper from "./../components/titleWrapper";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="container">
      <TitleWrapper className="title" />
      <form onSubmit={handleSubmit(onSubmit)} className="form-body">
        <Input label="Name" register={register} required />
        <Input
          label="Subject"
          register={register}
          required
          autoComplete="subject"
        />
        <TextArea
          rows={5}
          register={register}
          required
          label="Message"
          placeholder="message"
        />
        <button className="btn-primary-square">Submit</button>
      </form>
    </div>
  );
}

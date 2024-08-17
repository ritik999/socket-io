import React from "react";
import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";

const Signup = () => {
  return (
    <div className="p-5 min-w-96 bg-gray-500 shadow-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
      <h1 className="text-2xl text-white font-semibold">
        Login
        <span className="pl-1 text-sky-300">ChatApp</span>
      </h1>

      <form className="flex flex-col  gap-4 mt-6">
        <div>
          <div className="mb-2 block text-start">
            <Label className="text-white" htmlFor="email2" value="Your name" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="Your name"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label className="text-white" htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="Your email"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label
              className="text-white"
              htmlFor="password2"
              value="Your password"
            />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block text-start">
            <Label
              className="text-white"
              htmlFor="password3"
              value="Confirm password"
            />
          </div>
          <TextInput id="password3" type="password" required shadow />
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany" className="text-white">Male</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany" className="text-white">Female</Label>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Label className="flex text-white" htmlFor="agree">
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              Don't have an account?
            </a>
          </Label>
        </div>
        <Button type="submit">Register new account</Button>
      </form>
    </div>
  );
};

export default Signup;

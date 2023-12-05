"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const SimpleMDEValue = (value: string) => {
    setFormValue({ ...formValue, description: value });
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/issues", formValue);
      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form className="space-y-3" onSubmit={handleSubmitForm}>
        <TextField.Root>
          <TextField.Input
            placeholder="Title"
            value={formValue.title}
            onChange={(e) =>
              setFormValue({ ...formValue, title: e.target.value })
            }
          />
        </TextField.Root>
        <SimpleMDE placeholder="Issue Details" onChange={SimpleMDEValue} />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;

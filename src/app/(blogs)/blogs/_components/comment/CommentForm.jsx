"use client";

import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";

const initilaState = {
  error: "",
  message: "",
};

export default function CommentForm({ postId, parentId, onClose }) {
  const [text, setText] = useState();
  const [state, formAction] = useActionState(createComment, initilaState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            //  action={createCommentWithData}
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
            className="space-y-7">
            <TextArea name={"text"} label={"متن نظر"} value={text} isRequired onChange={(e) => setText(e.target.value)} />
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

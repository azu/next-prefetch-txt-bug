import { Suspense } from "react";
import { RouterReplaceTest } from "@/app/router-replace-test/page.client";

export default function Page() {
  return <Suspense>
    <RouterReplaceTest/>
  </Suspense>
}

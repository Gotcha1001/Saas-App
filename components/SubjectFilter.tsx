// import React from "react";

// const SubjectFilter = () => {
//   return <div>SubjectFilter</div>;
// };

// export default SubjectFilter;
// "use client";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"; // Adjust path based on your Shadcn setup
// import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { subjects, subjectsColors } from "../constants/index"; // Adjust path to your constants

// const SubjectFilter = () => {
//   const pathname = usePathname();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const initialSubject = searchParams.get("subject") || "";

//   const [selectedSubject, setSelectedSubject] = useState(initialSubject);

//   useEffect(() => {
//     const delayDebounceFn = setTimeout(() => {
//       if (selectedSubject) {
//         const newUrl = formUrlQuery({
//           params: searchParams.toString(),
//           key: "subject",
//           value: selectedSubject,
//         });
//         router.push(newUrl, { scroll: false });
//       } else {
//         if (pathname === "/companions") {
//           const newUrl = removeKeysFromUrlQuery({
//             params: searchParams.toString(),
//             keysToRemove: ["subject"],
//           });
//           router.push(newUrl, { scroll: false });
//         }
//       }
//     }, 500);

//     return () => clearTimeout(delayDebounceFn);
//   }, [selectedSubject, router, searchParams, pathname]);

//   return (
//     <Select
//       value={selectedSubject}
//       onValueChange={(value) => setSelectedSubject(value)}
//     >
//       <SelectTrigger className="w-[180px] border border-black rounded-lg">
//         <SelectValue placeholder="Select a subject" />
//       </SelectTrigger>
//       <SelectContent>
//         {subjects.map((subject) => (
//           <SelectItem
//             key={subject}
//             value={subject}
//             style={{
//               backgroundColor:
//                 subjectsColors[subject as keyof typeof subjectsColors],
//             }}
//           >
//             {subject.charAt(0).toUpperCase() + subject.slice(1)}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// };

// export default SubjectFilter;
"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("subject") || "";
  const [subject, setSubject] = useState(query);

  useEffect(() => {
    let newUrl = "";
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [subject]);

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem key={subject} value={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
}

export default function AllProjectsPage() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/FloresTristan/repos")
      .then((res) => res.json())
      .then(setRepos);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto p-5"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-center sm:text-left">All GitHub Repositories</h1>
        <Link href="/" className="btn btn-outline btn-primary">
          ← Back to Home
        </Link>
      </div>

      <div className="overflow-x-auto">
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="table w-full table-zebra"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th className="min-w-[200px]">Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <motion.tr key={repo.id} className="hover">
                <td className="font-bold whitespace-pre-wrap break-words ">{repo.name}</td>
                <td className="whitespace-pre-wrap break-words">{repo.description || "No description"}</td>
                <td>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    View Repo
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.main>
  );
}

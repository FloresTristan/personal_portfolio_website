"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  languages: string[];
  languages_url: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/FloresTristan/repos");
        const data = await res.json();
        const filtered = data.filter((repo: any) => !repo.fork && !repo.archived);

        const enriched = await Promise.all(
          filtered.map(async (repo: any) => {
            const langRes = await fetch(repo.languages_url);
            const langData = await langRes.json();
            const languages = Object.keys(langData);
            return {
              id: repo.id,
              name: repo.name,
              html_url: repo.html_url,
              description: repo.description,
              languages_url: repo.languages_url,
              languages,
            };
          })
        );

        // Sort by updated date, newest first
        enriched.sort(
          (a: any, b: any) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

        setRepos(enriched);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepos();
  }, []);

  const displayedRepos = showMore ? repos : repos.slice(0, 5);

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <ul className="space-y-4">
        {displayedRepos.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            // transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="bg-gray-900 p-5 rounded-lg border border-gray-800"
            // initial="offscreen"
            // whileInView="onscreen"
            // viewport={{ amount: 0.6 }}
            // className="overflow-hidden"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary-400 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-400 mb-2">{repo.description}</p>
            <div className="flex flex-wrap gap-2">
              {repo.languages.map((lang) => (
                <span
                  key={lang}
                  className="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </ul>

      {repos.length > 5 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-4 py-2 border border-primary-400 text-primary-400 rounded hover:bg-primary-400 hover:text-black transition-colors"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
}

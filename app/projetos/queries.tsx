import { useEffect, useState } from "react";

interface GitHubRepository {
  id: number;
  name: string;
  svn_url: string;
  description: string | null;
  watchers: number;
  language: string;
}

export function useGitHubRepositories() {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/patrickluizdev/repos`
        );

        if (response.ok) {
          const data = await response.json() as GitHubRepository[];
          setRepositories(data);
        } else {
          console.error("Failed to fetch GitHub repositories");
        }
      } catch (error) {
        console.error("Error fetching GitHub repositories", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepositories();
  }, []);

  const popularRepositories = repositories.filter((repo) => repo.watchers > 0);

  return { repositories, loading, popularRepositories };
}


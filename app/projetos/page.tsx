"use client";
import { Navigation } from "../components/nav";
import React, { useEffect, useState } from "react";
import { Card } from "../components/card";
import Link from "next/link";
import { useGitHubRepositories } from "./queries";

export const revalidate = 180;

interface LanguageMap {
	[key: string]: {
		label: string;
		logo: string;
	};
}

const languageMap: LanguageMap = {
	null: {
		label: 'Markdown',
		logo: 'Markdown',
	},
	SCSS: {
		label: 'Sass',
		logo: 'Sass',
	},
	CSS: {
		label: 'CSS',
		logo: 'Sass',
	},
	HTML: {
		label: 'HTML5',
		logo: 'HTML5',
	},
};

function mapLanguageToBadge(language: string): JSX.Element {
	const { label, logo } = languageMap[language] || { label: language || '', logo: language || '' };

	return (
		<img
			src={`https://img.shields.io/badge/-${label}-05122A?style=flat&logo=${logo}&logoColor=007ACC`}
			alt={label}
		/>
	);
}


export default function ProjectsPage() {
	const { repositories, loading, popularRepositories } = useGitHubRepositories();

	return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 animate-fade-in">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Aqui estão alguns dos meus projetos e contribuições. Esses repositórios representam meus estudos, trabalho e lazer. Sinta-se à vontade para explorar cada projeto!
          </p>
        </div>

        {/* Seção de Destaques */}
        <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Destaques</h2>
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mt-1">
          {loading ? (
            <p>Loading...</p>
          ) : (
            popularRepositories.map((repo) => (
              <Card className="mt-2" key={repo.id}>
                <Link href={repo.svn_url} target="_blank">
                  <div className="p-4 md:p-8 border border-gray-200 rounded-lg">
                    <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl font-display">
                      {repo.name}
                    </h2>
                    <div className="pt-6">
                      {mapLanguageToBadge(repo.language)}
                    </div>
                  </div>
                </Link>
              </Card>
            ))
          )}
        </div>

        {/* Lista de Todos os Repositórios */}
        <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4">Todos os Repositórios</h2>

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mt-1">
          {loading ? (
            <p>Loading...</p>
          ) : (
            repositories.map((repo) => (
              <Card className="mt-6" key={repo.id}>
                <Link href={repo.svn_url} target="_blank">
                  <div className="p-4 md:p-8 border border-gray-200 rounded-lg">
                    <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl font-display">
                      {repo.name}
                    </h2>
                    <div className="pt-6">
                      {mapLanguageToBadge(repo.language)}
                    </div>
                  </div>
                </Link>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

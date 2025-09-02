import {Article} from "../models/article.model";

export function filterArticles(articles: Article[], keywords: string): Article[] {
  if (!keywords.trim()) return articles;

  const keywordArray = keywords.toLowerCase().split(' ').filter(k => k.trim());

  return articles
    .map(article => {
      const titleMatches = keywordArray.filter(keyword =>
        article.title.toLowerCase().includes(keyword)
      ).length;

      const summaryMatches = keywordArray.filter(keyword =>
        article.summary.toLowerCase().includes(keyword)
      ).length;

      const totalMatches = titleMatches + summaryMatches;

      if (totalMatches === 0) return null;

      const priority = titleMatches * 2 + summaryMatches;

      return {article, priority, titleMatches, summaryMatches};
    })
    .filter(item => item !== null)
    .sort((a, b) => b!.priority - a!.priority)
    .map(item => item!.article);
}

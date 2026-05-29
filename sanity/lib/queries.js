// ─── Project Queries ────────────────────────────────────────────

export const getAllProjects = `*[_type == "project"] | order(completionDate desc) {
  _id,
  title,
  slug,
  category,
  description,
  specs,
  images,
  featured,
  completionDate,
  client
}`;

export const getFeaturedProjects = `*[_type == "project" && featured == true] | order(completionDate desc) [0...3] {
  _id,
  title,
  slug,
  category,
  description,
  specs,
  images,
  completionDate,
  client
}`;

export const getProjectBySlug = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  specs,
  images,
  featured,
  completionDate,
  client
}`;

// ─── Blog Post Queries ──────────────────────────────────────────

export const getAllBlogPosts = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  author,
  publishedAt,
  category,
  excerpt,
  coverImage,
  readTime
}`;

export const getBlogPostBySlug = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  author,
  publishedAt,
  category,
  excerpt,
  body,
  coverImage,
  readTime
}`;

// ─── Testimonial Queries ────────────────────────────────────────

export const getAllTestimonials = `*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  clientName,
  company,
  role,
  quote,
  rating,
  photo,
  featured
}`;

export const getFeaturedTestimonials = `*[_type == "testimonial" && featured == true] {
  _id,
  clientName,
  company,
  role,
  quote,
  rating,
  photo
}`;

import { Link } from '@remix-run/react';
import { getImgUrl, strapiUrl } from '~/utils/shared';

export default function BlogCard({ post }: { post: any }) {
  let data = post.attributes;
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-img">
          <img
            src={`${strapiUrl}${data.hero.data.attributes.url}`}
            alt={data.hero.data.attributes.alternativeText}
          />
        </div>
        <div className="card-details">

          <Link to={`/blog/${post.id}`} className="card-title">
            {data.title}
          </Link>

          <p className="card-excerpt">{data.excerpt}</p>
        </div>
      </div>
    </div>
  )
}
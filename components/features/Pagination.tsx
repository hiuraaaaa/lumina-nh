import Link from 'next/link'

export default function Pagination({ currentPage }: { currentPage: number }) {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link href={`/browse/${currentPage - 1}`}>Previous</Link>
      )}
      <span>Page {currentPage}</span>
      <Link href={`/browse/${currentPage + 1}`}>Next</Link>
    </div>
  )
}

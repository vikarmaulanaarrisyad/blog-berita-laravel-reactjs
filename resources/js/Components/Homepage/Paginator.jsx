import { Link } from "@inertiajs/inertia-react";

const Paginator = ({ meta }) => {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current_page = meta.current_page;

    return (
        <div class="btn-group m-10">
            {prev ? (
                <Link href={prev} class="btn btn-outline">
                    Sebelumnya
                </Link>
            ) : (
                <Link href={prev} class="btn btn-outline btn-disabled">
                    Sebelumnya
                </Link>
            )}

            <Link class="btn btn-outline">{current_page}</Link>

            {next ? (
                <Link href={next} class="btn btn-outline">
                    Selanjutnya
                </Link>
            ) : (
                <Link href={next} class="btn btn-outline btn-disabled">
                    Selanjutnya
                </Link>
            )}
        </div>
    );
};

export default Paginator;

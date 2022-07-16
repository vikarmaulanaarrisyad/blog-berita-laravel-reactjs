import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepage(props) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-50">
            <Head title={props.title} />
            <div>
                <p>{props.desc}</p>
                {props.news ? (
                    props.news.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="p-4 m-2 bg-white text-black shadow-md border rounded-md"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p className="">{data.description}</p>
                                <i className="text-sm">{data.category}</i>
                                <br />
                                <i className="text-sm">{data.author}</i>
                            </div>
                        );
                    })
                ) : (
                    <p>Saat Ini Belum Ada Berita Tersedia</p>
                )}
            </div>
        </div>
    );
}

import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "mzvngayi",
    dataset: "production",
    useCdn: true,
})
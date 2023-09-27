import { scrape } from "./lib"

const main = async () => {
    await scrape()
}

(async () => {
    main()
        .then(() => {
            console.log("[main] clean exit")
            process.exit(0)
        })
        .catch((error) => {
            console.error("[main] error:")
            console.error(error)
            process.exit(1)
        })
})()

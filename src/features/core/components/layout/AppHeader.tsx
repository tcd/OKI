import { Link as RouterLink } from "react-router-dom"
import {
    AppBar,
    Box,
    Stack,
    Toolbar,
} from "@mui/material"

export const  AppHeader = (): JSX.Element => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ backgroundColor: "#666666" }}>

                <RouterLink to="/">
                    <Icon />
                </RouterLink>

                <Box sx={{ flexGrow: 1 }} />

                <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ ml: 2 }}
                >
                </Stack>
            </Toolbar>
        </AppBar>
    )
}


const Icon = (): JSX.Element => {
    return (
        <Box
            component="img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAolBMVEULN0p57v8VSFtGmat36vtUscMjXnElY3YQPlIOO09t3O1o0uNgxtdMpbYTRVh16fl05vZx4PJq1eZjytxBkKIyeYsuc4YaUGMRQ1YMOUt47P1r2OlavM1PqbtJn7FHnK5Ck6Y+jJ44g5Y3gJIsboAgWmweWGocVGcMOUxy4vNw3u9q1edlzd9Elqg7iJooaHoYTGBv3e5cv9ApaXxfwdM1fZD6BA5qAAABVUlEQVQ4y82S6XaCQAyF5yIgq8qOCIIIiPvWvv+rNSMFcWl/9vT7AZnkJudOzrD/xsr90LfGfPhDWZAiNDjyu/rQQoeYv9blMeXN4iQMM648PNeVLaCvmjiUSFs+CRaAPWoPU1LEj/WpBvTMhxaw6vv3D4DRb9gDpl/dDYJw+aAinX8q/EpNpuUEwqNJBghNpqjJdA7OAJZMdXBjHbAAeHBhAkiZB4hSsgESVgDQe0vgJmZ1guhI08/YsgTAoqurhiIByCXs+DHFphKpQT3cl7QXNGASN1NN6DogHq/wv7cwgTiUJ8DNKauaKKceW+0cWmU1A8eIxyDGXui0NtT9gMiuI1NES1wKHs+6U9YyiuZh4DrUHtmprOYae2JEJvlbE05qLWca1m8EMMqlc7nsJN/GqyCEXTBW78hfwOrlxnp5UZnCf0dgcBtI3/dIM4X9SuCzP+cLQ6cVIa19VogAAAAASUVORK5CYII="
            alt="Sea of Stars"
            sx={{
                width: "50px",
                // backgroundColor: "white",
            }}
        />
    )
}

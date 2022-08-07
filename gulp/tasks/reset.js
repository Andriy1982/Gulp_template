import { deleteAsync } from "del"; "del";
export const reset = () => {
    return deleteAsync(app.path.clean);
}
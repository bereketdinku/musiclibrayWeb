import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchInput = () => {
    return ( <div className="relative sm:block hidden">
        <Search className="top-3 left-4 absolute w-4 h-4 text-muted-foreground"/>
        <Input placeholder="Search here" className="pl-10 bg-primary/10"/>

    </div> );
}
 
export default SearchInput;
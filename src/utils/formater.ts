import moment from "moment";

export function RelativeDateFormater(date: string){
	return moment(date).fromNow(); 
}

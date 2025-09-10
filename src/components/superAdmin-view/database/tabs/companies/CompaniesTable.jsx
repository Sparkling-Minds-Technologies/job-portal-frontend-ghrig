import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../ui/table";
import { Badge } from "../../../../ui/badge";
import { Button } from "../../../../ui/button";
import { Trash2, Eye, Building2 } from "lucide-react";

const CompaniesTable = ({ paginatedCompanies, handleDeleteCompany }) => (
  <div className="bg-white rounded-lg border overflow-hidden">
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[80px]">ID</TableHead>
            <TableHead className="min-w-[180px]">Name</TableHead>
            <TableHead className="min-w-[120px]">Industry</TableHead>
            <TableHead className="min-w-[180px]">Contact</TableHead>
            <TableHead className="min-w-[100px]">Jobs Posted</TableHead>
            <TableHead className="min-w-[150px]">Location</TableHead>
            <TableHead className="min-w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedCompanies.length > 0 ? (
            paginatedCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell>{company.id}</TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.industry}</TableCell>
                <TableCell>{company.contact}</TableCell>
                <TableCell>
                  <Badge variant="outline">{company.jobs} jobs</Badge>
                </TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" title="View Details">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteCompany(company)}
                      className="text-red-600 hover:text-red-700"
                      title="Delete Company"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Building2 className="h-8 w-8 text-gray-400" />
                  <span className="text-gray-500">
                    No companies found matching your criteria
                  </span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default CompaniesTable;

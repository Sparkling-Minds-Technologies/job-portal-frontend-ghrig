import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import { Badge } from "../../../ui/badge";
import { Search, Trash2, Plus, BookOpen, Eye, Star, Award } from "lucide-react";
import Pagination from "../../../common/pagination";

const TrainersTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Mock trainers data - Replace with actual API call when trainer endpoint exists
  const trainers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@trainingcorp.com",
      specializations: ["Data Science", "Machine Learning", "Python"],
      experience: "8 years",
      rating: 4.8,
      trainingsConducted: 45,
      studentsCount: 1250,
      status: "active",
      joinedDate: "2023-06-15",
      certification: "Certified Data Science Trainer",
    },
    {
      id: 2,
      name: "Mark Thompson",
      email: "mark.thompson@webdev.com",
      specializations: ["Web Development", "React", "JavaScript"],
      experience: "6 years",
      rating: 4.6,
      trainingsConducted: 32,
      studentsCount: 890,
      status: "active",
      joinedDate: "2023-08-20",
      certification: "Certified Web Development Instructor",
    },
    {
      id: 3,
      name: "Prof. Lisa Chen",
      email: "lisa.chen@ailearning.com",
      specializations: ["Artificial Intelligence", "Deep Learning"],
      experience: "10 years",
      rating: 4.9,
      trainingsConducted: 28,
      studentsCount: 675,
      status: "pending",
      joinedDate: "2024-01-10",
      certification: "PhD in Computer Science",
    },
  ];

  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.specializations.some((spec) =>
        spec.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleDeleteTrainer = (trainer) => {
    setSelectedTrainer(trainer);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    // Implement delete logic here
    console.log("Deleting trainer:", selectedTrainer);
    setShowDeleteDialog(false);
    setSelectedTrainer(null);
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="font-medium">{rating}</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Trainers</h1>
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline" size="sm">
            <BookOpen className="h-4 w-4 mr-2" />
            Filter by Specialization
          </Button>
        </div>
        <Button size="sm" className="bg-[#6945ED] hover:bg-[#5a3bc4]">
          <Plus className="h-4 w-4 mr-2" />
          Add Trainer
        </Button>
      </div>

      {/* Trainers Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-gray-900">
            {trainers.length}
          </div>
          <div className="text-sm text-gray-500">Total Trainers</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-green-600">
            {trainers.filter((t) => t.status === "active").length}
          </div>
          <div className="text-sm text-gray-500">Active</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-blue-600">
            {trainers.reduce(
              (sum, trainer) => sum + trainer.trainingsConducted,
              0
            )}
          </div>
          <div className="text-sm text-gray-500">Trainings Conducted</div>
        </div>
        <div className="bg-white rounded-lg border p-4">
          <div className="text-2xl font-bold text-purple-600">
            {trainers.reduce((sum, trainer) => sum + trainer.studentsCount, 0)}
          </div>
          <div className="text-sm text-gray-500">Students Trained</div>
        </div>
      </div>

      {/* Trainers Table */}
      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Trainer</TableHead>
              <TableHead>Specializations</TableHead>
              <TableHead>Experience</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Trainings</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTrainers.map((trainer) => (
              <TableRow key={trainer.id}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{trainer.name}</span>
                      <span className="text-sm text-gray-500">
                        {trainer.email}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specializations.slice(0, 2).map((spec, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {spec}
                      </Badge>
                    ))}
                    {trainer.specializations.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{trainer.specializations.length - 2} more
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell>{trainer.experience}</TableCell>
                <TableCell>{renderRating(trainer.rating)}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700">
                    {trainer.trainingsConducted}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700"
                  >
                    {trainer.studentsCount.toLocaleString()}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      trainer.status === "active"
                        ? "bg-green-100 text-green-800 border-green-300"
                        : "bg-yellow-100 text-yellow-800 border-yellow-300"
                    }
                  >
                    {trainer.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" title="View Profile">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      title="View Certifications"
                    >
                      <Award className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteTrainer(trainer)}
                      className="text-red-600 hover:text-red-700"
                      title="Delete Trainer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredTrainers.length === 0 && (
          <div className="text-center py-8">
            <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <div className="text-gray-500">No trainers found</div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredTrainers.length / 10)}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Trainer</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{selectedTrainer?.name}"? This
              action cannot be undone and will affect all associated trainings.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TrainersTab;
